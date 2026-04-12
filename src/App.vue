<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input type="radio" name="temperature" :id="`r${temp}`" :value="temp" v-model="beverageStore.currentTemp" />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="b in beverageStore.bases" :key="b.id">
          <label>
            <input type="radio" name="bases" :id="`r${b.id}`" :value="b" v-model="beverageStore.currentBase" />
            {{ b.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="s in beverageStore.syrups" :key="s.id">
          <label>
            <input type="radio" name="syrups" :id="`r${s.id}`" :value="s" v-model="beverageStore.currentSyrup" />
            {{ s.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="c in beverageStore.creamers" :key="c.id">
          <label>
            <input type="radio" name="creamers" :id="`r${c.id}`" :value="c" v-model="beverageStore.currentCreamer" />
            {{ c.name }}
          </label>
        </template>
      </li>
    </ul>
    <button v-if="!beverageStore.currentUser" :disabled="beverageStore.authBusy"
      @click="beverageStore.signInWithGoogle()">
      Sign in with Google
    </button>
    <p v-else>
      Signed in as: {{ beverageStore.currentUser.displayName || beverageStore.currentUser.uid }}
      <button :disabled="beverageStore.authBusy" @click="beverageStore.signOutUser()">Sign out</button>
    </p>
    <p v-if="beverageStore.authMessage">{{ beverageStore.authMessage }}</p>
    <p v-if="beverageStore.successVisible">{{ beverageStore.successMessage }}</p>
    <input type="text" placeholder="Beverage Name" v-model="beverageStore.currentName" />
    <button :disabled="!beverageStore.currentUser" @click="beverageStore.makeBeverage()">
      🍺 Make Beverage
    </button>
    <section v-if="beverageStore.beverages.length">
      <ul class="beverage-list">
        <li v-for="beverage in beverageStore.beverages" :key="beverage.id" class="beverage-item">
          <label class="beverage-option">
            <input type="radio" name="beverage" :id="`r${beverage.id}`" :value="beverage"
              v-model="beverageStore.currentBeverage" />
            <span class="beverage-text">
              <strong>{{ beverage.name }}</strong>
              <span>{{ beverage.temp }}</span>
            </span>
          </label>
          <button type="button" class="remove-button" aria-label="Remove beverage" title="Remove beverage"
            @click="beverageStore.removeBeverage(beverage.id)">
            ×
          </button>
        </li>
      </ul>
    </section>
  </div>
  <div id="beverage-container" style="margin-top: 20px"></div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();

beverageStore.init();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(to bottom, #956f5a 0%, #6e4228 100%);
}

ul {
  list-style: none;
}

.beverage-list {
  margin: 0;
  padding: 0;
}

.beverage-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 6px 0;
}

.beverage-option {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.beverage-text {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
}

.remove-button {
  width: 20px;
  height: 20px;
  padding: 0;
  border: 1px solid #d6d6d6;
  border-radius: 50%;
  background: #fff;
  color: hsl(0, 81%, 43%);
  font-size: 14px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

input {
  cursor: pointer;
  border: 1px solid #d6d6d6;
  padding: 0.2em;
  margin: 5px 5px;
  font-size: 200;
}
</style>
6