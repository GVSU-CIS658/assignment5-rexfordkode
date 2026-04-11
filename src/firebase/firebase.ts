import {collection,getDocs,DocumentData, setDoc, doc, QuerySnapshot, QueryDocumentSnapshot, onSnapshot} from "firebase/firestore";
import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import temperatures from "../data/tempretures.json";

import {getAuth, signInAnonymously,signOut,GoogleAuthProvider, UserCredential, signInWithPopup} from "firebase/auth";
import db, { auth } from "../firebase";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temperatures as string[],
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
  }),

  actions: {
    init() {},
    makeBeverage() {},

    showBeverage() {},
  },
});

//Google Sign In
export async function signInWithGoogle():Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
}

//Sign Out
export async function signOutUser():Promise<void> {
    await signOut(auth);
}

//Load Collection Data
export async function loadCollection(collectionName: string): Promise<DocumentData[]> {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => doc.data());
}

//Real-time Listener
export function listenToCollection(collectionName: string, callback: (data: DocumentData[]) => void): () => void {
    const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        callback(data);
    });
    return unsubscribe;
}

//Load all collections using Promise.all
export async function loadAllCollections(collectionNames: string[]): Promise<{ [key: string]: DocumentData[] }> {
    const collectionsData: { [key: string]: DocumentData[] } = {};
    await Promise.all(collectionNames.map(async (name) => {
        collectionsData[name] = await loadCollection(name);
    }));
    return collectionsData;
}
