import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "",
  authDomain: "jpmc-c1ba1.firebaseapp.com",
  databaseURL: "https://jpmc-c1ba1.firebaseio.com",
  projectId: "jpmc-c1ba1",
  storageBucket: "jpmc-c1ba1.appspot.com",
  messagingSenderId: "30632429672",
  appId: "1:30632429672:web:2bee6a5b907f9d92cb53dd",
  measurementId: "G-78RZTYP9JV",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectDatabase = firebase.database();

export { projectFirestore, projectDatabase };
