import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.FIRE_BASE_APIKEY,
    authDomain: process.env.FIRE_BASE_AUTHDOMAIN,
    projectId: process.env.FIRE_BASE_PROJECTID,
    storageBucket: process.env.FIRE_BASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIRE_BASE_MESSAGINGSENDERID,
    appId: process.env.FIRE_BASE_APPID,
    measurementId: process.env.FIRE_BASE_MEASUREMENTID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);

export { app, auth, storage }