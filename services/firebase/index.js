import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDS0iigtbLHgCHs_jlzo0qJXP3temn_FWI",
  authDomain: "lcp-caracas-a5bf3.firebaseapp.com",
  databaseURL: "https://lcp-caracas-a5bf3.firebaseio.com",
  projectId: "lcp-caracas-a5bf3",
  storageBucket: "lcp-caracas-a5bf3.appspot.com",
  messagingSenderId: "483035691854",
  appId: "1:483035691854:web:64728753a8ef1f0177fc1f",
  measurementId: "G-C3JF25PEP8"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const FieldValue = firebase.firestore.FieldValue

function TotalReservationsUpdateIncrement(total) {
  db.collection('reservaciones').doc('totalReservaciones').update({
    total: FieldValue.increment(total)
  })
}

function AddReservations(name, lastName, email, phone, companions) {
  db.collection('reservaciones').add({
    name: name,
    lastname: lastName,
    email: email,
    phone: phone,
    companions: companions,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  }).then(docRef => {
    return console.log("Document written with ID: ", docRef.id);
  }).catch(error => {
    return console.error("Error adding document: ", error);
  });
}

export { db, AddReservations, TotalReservationsUpdateIncrement }

