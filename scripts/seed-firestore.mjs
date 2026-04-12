import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseEnvFile(content) {
  const env = {};

  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const equalsIndex = line.indexOf("=");
    if (equalsIndex === -1) {
      continue;
    }

    const key = line.slice(0, equalsIndex).trim();
    let value = line.slice(equalsIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    env[key] = value;
  }

  return env;
}

const envPath = path.join(__dirname, "..", ".env");
const envFile = parseEnvFile(await readFile(envPath, "utf8"));

const firebaseConfig = {
  apiKey: envFile.VITE_API_KEY,
  authDomain: envFile.VITE_AUTH_DOMAIN,
  projectId: envFile.VITE_PROJECT_ID,
  storageBucket: envFile.VITE_STORAGE_BUCKET,
  messagingSenderId: envFile.VITE_MESSAGING_SENDER_ID,
  appId: envFile.VITE_APP_ID,
  measurementId: envFile.VITE_MEASUREMENT_ID,
};

const seedPath = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "seedCollections.json",
);
const seedData = JSON.parse(await readFile(seedPath, "utf8"));

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedCollection(collectionName, items) {
  const seenIds = new Set();

  for (const item of items ?? []) {
    if (seenIds.has(item.id)) {
      console.log(`Skipping duplicate id ${item.id} in ${collectionName}`);
      continue;
    }

    seenIds.add(item.id);

    const reference = doc(db, collectionName, item.id);
    const existingDoc = await getDoc(reference);

    if (existingDoc.exists()) {
      console.log(`Skipping existing ${collectionName}/${item.id}`);
      continue;
    }

    await setDoc(reference, item);
  }
}

await seedCollection("bases", seedData.bases);
await seedCollection("creamers", seedData.creamers);
await seedCollection("syrups", seedData.syrups);

console.log("Seed complete (bases, creamers, syrups).");
process.exit(0);
