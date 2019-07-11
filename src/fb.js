import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCd5TbyRDy1Y3XlTgNnebpmO9Ja3PYbpiw',
  authDomain: 'todo-vuetify-62553.firebaseapp.com',
  databaseURL: 'https://todo-vuetify-62553.firebaseio.com',
  projectId: 'todo-vuetify-62553',
  storageBucket: 'todo-vuetify-62553.appspot.com',
  messagingSenderId: '916393349684',
  appId: '1:916393349684:web:60e762759eaccb94'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });

export default db;
