import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpJzKmbDeD6982X3GFMn23dgxMLMh3gmM",
  authDomain: "basic-login-d4fdc.firebaseapp.com",
  projectId: "basic-login-d4fdc",
  storageBucket: "basic-login-d4fdc.appspot.com",
  messagingSenderId: "35583570894",
  appId: "1:35583570894:web:3d27a854ca6a23f182319f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
