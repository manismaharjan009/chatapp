import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDTmapdN3h9zi155f0Z6cnck26d1BgCTzI",
  authDomain: "chatapp-579fc.firebaseapp.com",
  databaseURL: "https://chatapp-579fc.firebaseio.com",
  projectId: "chatapp-579fc",
  storageBucket: "chatapp-579fc.appspot.com",
  messagingSenderId: "1041688206225"
};

firebase.initializeApp(config);

export default firebase;