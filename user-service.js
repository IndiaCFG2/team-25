const firebase = require("firebase/app");
require("firebase/auth");

const apiKey = process.env.FIREBASE_API_KEY;

const fb = firebase.initializeApp({
  apiKey: apiKey,
});

exports.addUser = (schoolId, password) =>
  fb.auth().createUserWithEmailAndPassword(schoolId, password);

exports.authenticate = (schoolId, password) =>
  fb.auth().signInWithEmailAndPassword(schoolId, password);
