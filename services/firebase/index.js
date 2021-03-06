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
const totalReservationsFirstService = db.collection('reservaciones').doc('totalReservationsFirstService')
const totalReservationsSecondService = db.collection('reservaciones').doc('totalReservationsSecondService')
const FieldValue = firebase.firestore.FieldValue

export const TotalReservationsUpdateIncrement = (sheduleService, total) => {
  console.log('Total Reservations Update Increment', sheduleService, total)

  if (sheduleService === '1er Servicio - 9:00am') {
    totalReservationsFirstService
      .update({
        total: FieldValue.increment(total)
      }).then(() => console.log('Reservaciones total sumando: ', total, 'reservaciones'))

  } else if (sheduleService === '2do Servicio - 11:00am') {
    totalReservationsSecondService
      .update({
        total: FieldValue.increment(total)
      }).then(() => console.log('Reservaciones total sumando: ', total, 'reservaciones'))
  }
}

const AddReservations = async (
  name, lastName,
  email, phone,
  reservedSeats, ticketsSeats,
  scheduleService,
  totalReservationsToSubmit
) => {
  db.collection('reservaciones').add({
    name: name,
    lastname: lastName,
    email: email,
    phone: phone,
    reservedSeats: reservedSeats,
    ticketsSeats: ticketsSeats,
    scheduleService: scheduleService,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  }).then(docRef => {
    TotalReservationsUpdateIncrement(totalReservationsToSubmit)
    return console.log("Documento escrito con el id: ", docRef.id)
  }).catch(error => {
    return console.error("Error adding document: ", error);
  });
}

export { db, AddReservations }

