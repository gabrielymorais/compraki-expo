import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVaoVzphPIrm0Q5RoFsd_yqHSfktw8dKE",
  authDomain: "compraki-app-d4107.firebaseapp.com",
  projectId: "compraki-app-d4107",
  storageBucket: "compraki-app-d4107.appspot.com",
  messagingSenderId: "592696358211",
  appId: "1:592696358211:android:b249ae85f26cb247452bf6",
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Inicializa os serviços
export const auth = getAuth(app);
export const db = getFirestore(app);
