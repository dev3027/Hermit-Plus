import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAGLwo38venJBAvt731uq8Kgef0_CDHoqE',
  authDomain: 'hermit-plus.firebaseapp.com',
  projectId: 'hermit-plus',
  storageBucket: 'hermit-plus.appspot.com',
  messagingSenderId: '1041771394468',
  appId: '1:1041771394468:web:df54be6aa911a148fe3d31',
  measurementId: 'G-JMBN96NH8P'
};

firebase.initializeApp(firebaseConfig);

const hermitStorage = firebase.storage();
const hermitDb = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { hermitStorage, hermitDb, timestamp };
