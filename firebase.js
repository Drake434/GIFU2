  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getDatabase, ref, set, remove, onValue, onDisconnect, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBGh46wWig5a14tIG79aMC2fvy9KkBwlrM",
    authDomain: "farid-9ae00.firebaseapp.com",
    projectId: "farid-9ae00",
    storageBucket: "farid-9ae00.firebasestorage.app",
    messagingSenderId: "660872956739",
    appId: "1:660872956739:web:a082bc97ed2a2469b43df6",
    databaseURL: "https://farid-9ae00-default-rtdb.europe-west1.firebasedatabase.app"
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const sessionKey = localStorage.getItem("nt_anketa_session") || ("anketa_" + Math.random().toString(36).slice(2) + Date.now());
  localStorage.setItem("nt_anketa_session", sessionKey);
  const onlineRef = ref(db, "anketa/online/" + sessionKey);
  set(onlineRef, { page: "personal-file", status: "online", ts: serverTimestamp() }).catch(() => {});
  onDisconnect(onlineRef).remove().catch(() => {});
  window.NT_ANKETA_FIREBASE = { app, db, api: { db, ref, set, remove, onValue, serverTimestamp } };
  window.dispatchEvent(new CustomEvent("nt-anketa-firebase-ready"));
