const firebase = require('firebase');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtIkGyeSvHVakCx1BNpoIUEe-IqwssHhs",
    authDomain: "my-app-1313a.firebaseapp.com",
    databaseURL: "https://my-app-1313a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-app-1313a",
    storageBucket: "my-app-1313a.appspot.com",
    messagingSenderId: "589049779505",
    appId: "1:589049779505:web:b08e3e02e3adce25994c10",
    measurementId: "G-BT22L3M5LV"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const User = db.collection("users");

  module.exports = User;