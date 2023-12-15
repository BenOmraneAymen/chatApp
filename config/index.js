// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8rzX3ThhqYGox4JV5TXKHF2gX3wcQyhU",
  authDomain: "reactnativeapp-8f4f2.firebaseapp.com",
  databaseURL: "https://reactnativeapp-8f4f2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactnativeapp-8f4f2",
  storageBucket: "reactnativeapp-8f4f2.appspot.com",
  messagingSenderId: "812670367788",
  appId: "1:812670367788:web:ffe1ffc99f7bb49d2a7989",
  measurementId: "G-B765F6Y1HS"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;