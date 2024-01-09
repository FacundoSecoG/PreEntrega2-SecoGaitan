import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2RnCfJUqKpdZdkb_pX2EL3sDWHdW1O2s",
  authDomain: "productos-reactjs.firebaseapp.com",
  projectId: "productos-reactjs",
  storageBucket: "productos-reactjs.appspot.com",
  messagingSenderId: "1051707112663",
  appId: "1:1051707112663:web:3ed30bbc9ab5fa6e524492"
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
