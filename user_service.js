const firebase = require("firebase/app");
require("firebase/auth");
const config=require('./config')
const apiKey = config.firebase.token;
const fb = firebase.initializeApp({
  apiKey: apiKey,
});

exports.addUser = (email, password) =>
  fb.auth().createUserWithEmailAndPassword(email, password);

exports.authenticate = (email, password) =>
  fb.auth().signInWithEmailAndPassword(email, password);
