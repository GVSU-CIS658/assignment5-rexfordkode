import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import temperatures from "../data/tempretures.json";
import db, { auth } from "../firebase.ts";
import {
  collection,
  deleteDoc,
  getDocs,
  setDoc,
  doc,
  QuerySnapshot,
  QueryDocumentSnapshot,
  query,
  where,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  type User,
} from "firebase/auth";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temperatures,
    currentTemp: temperatures[0],
    bases: [] as BaseBeverageType[],
    currentBase: null as BaseBeverageType | null,
    syrups: [] as SyrupType[],
    currentSyrup: null as SyrupType | null,
    creamers: [] as CreamerType[],
    currentCreamer: null as CreamerType | null,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
    currentUser: null as User | null,
    authBusy: false,
    successMessage: "",
    successVisible: false,
    successTimeoutId: null as ReturnType<typeof setTimeout> | null,
    initialized: false,
  }),

  actions: {
    async init() {
      if (this.initialized) {
        return;
      }

      this.initialized = true;

      await Promise.all([
        this.loadBases(),
        this.loadSyrups(),
        this.loadCreamers(),
      ]);

      onAuthStateChanged(auth, async (user) => {
        this.currentUser = user;

        if (user) {
          await this.loadMyBeverages(user.uid);
        } else {
          this.beverages = [];
        }
      });
    },
    makeBeverage() {
      if (!this.currentUser) {
        return;
      }

      if (this.currentBase && this.currentSyrup && this.currentCreamer) {
        const beverageName = this.currentName.trim() || "Untitled Beverage";
        const newBeverage: BeverageType = {
          id: Date.now().toString(),
          name: beverageName,
          temp: this.currentTemp,
          base: this.currentBase,
          syrup: this.currentSyrup,
          creamer: this.currentCreamer,
          userId: this.currentUser.uid,
        };
        this.beverages.push(newBeverage);
        this.currentBeverage = newBeverage;
        setDoc(doc(db, "beverages", newBeverage.id), newBeverage);

        this.successMessage = `Beverage ${beverageName} made successfully!`;
        this.successVisible = true;
        if (this.successTimeoutId) {
          globalThis.clearTimeout(this.successTimeoutId);
        }
        this.successTimeoutId = globalThis.setTimeout(() => {
          this.successVisible = false;
          this.successTimeoutId = null;
        }, 15000);

        this.currentName = "";
      }
    },
    async removeBeverage(beverageId: string) {
      this.beverages = this.beverages.filter(
        (beverage) => beverage.id !== beverageId,
      );

      if (this.currentBeverage?.id === beverageId) {
        this.currentBeverage = this.beverages[0] ?? null;
      }

      await deleteDoc(doc(db, "beverages", beverageId));
    },
    async signInWithGoogle() {
      if (this.authBusy) {
        return;
      }

      this.authBusy = true;
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
      } finally {
        this.authBusy = false;
      }
    },

    async signOutUser() {
      if (this.authBusy) {
        return;
      }

      this.authBusy = true;
      try {
        await signOut(auth);
      } finally {
        this.currentUser = null;
        this.beverages = [];
        this.currentBeverage = null;
        this.currentName = "";
        this.successMessage = "";
        this.successVisible = false;
        if (this.successTimeoutId) {
          globalThis.clearTimeout(this.successTimeoutId);
          this.successTimeoutId = null;
        }
        this.currentTemp = temperatures[0];
        this.currentBase = null;
        this.currentSyrup = null;
        this.currentCreamer = null;
        this.authBusy = false;
      }
    },
    async loadMyBeverages(userId?: string) {
      const activeUserId = userId ?? this.currentUser?.uid;

      if (!activeUserId) {
        this.beverages = [];
        this.currentBeverage = null;
        return;
      }

      const beverageQuery = query(
        collection(db, "beverages"),
        where("userId", "==", activeUserId),
      );
      const querySnapshot: QuerySnapshot = await getDocs(beverageQuery);
      this.beverages = querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot) => doc.data() as BeverageType,
      );
      this.currentBeverage = this.beverages[0] ?? null;
    },
    showBeverage() {
      if (this.currentBeverage) {
        alert(
          `Beverage: ${this.currentBeverage.name}\nTemperature: ${this.currentBeverage.temp}\nBase: ${this.currentBeverage.base.name}\nSyrup: ${this.currentBeverage.syrup.name}\nCreamer: ${this.currentBeverage.creamer.name}`,
        );
      }
    },

    async loadBases() {
      const querySnapshot: QuerySnapshot = await getDocs(
        collection(db, "bases"),
      );
      this.bases = querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot) => doc.data() as BaseBeverageType,
      );
      this.currentBase = this.bases[0] ?? null;
    },
    async loadSyrups() {
      const querySnapshot: QuerySnapshot = await getDocs(
        collection(db, "syrups"),
      );
      this.syrups = querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot) => doc.data() as SyrupType,
      );
      this.currentSyrup = this.syrups[0] ?? null;
    },
    async loadCreamers() {
      const querySnapshot: QuerySnapshot = await getDocs(
        collection(db, "creamers"),
      );
      this.creamers = querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot) => doc.data() as CreamerType,
      );
      this.currentCreamer = this.creamers[0] ?? null;
    },
  },
});
