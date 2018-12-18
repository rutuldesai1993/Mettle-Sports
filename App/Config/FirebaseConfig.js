
import Firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUyg4C68d8oWcTb6coqTbKfIH7XuQcHzQ",
    authDomain: "mettlesports-backend.firebaseapp.com",
    databaseURL: "https://mettlesports-backend.firebaseio.com",
    projectId: "mettlesports-backend",
    storageBucket: "mettlesports-backend.appspot.com",
    messagingSenderId: "799688425543"
};
const firebaseApp = Firebase.initializeApp(firebaseConfig);

export default firebaseApp;
