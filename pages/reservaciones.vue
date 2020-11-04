<template>
  <div>
    <h2>Reservaciones disponibles {{ reservationsAvailable }}</h2>
    <!-- <Form /> -->
  </div>
</template>

<script>
// import { db } from '~/services/firebase'
// import Form from '~/components/Form'

export default {
  name: 'Reservaciones',
  // components: { Form },
  data: () => ({
    countedReservations: 3,
    usersReservations: [1,2,3]
  }),

  // created() {
    // this.countReservations()
  // },

  computed: {
    reservationsAvailable() {
      const limitReservations = 100
      const available = limitReservations - this.countedReservations
      return available
    }
  },

  methods: {
    // countReservations() {
    //   db.collection('reservaciones').get()
    //     .then(reservations => {
    //       reservations.forEach(doc => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data())
    //         this.countedReservations++
    //         this.usersReservations.push(doc.data())
    //       })
    //     })
    // }
  },
}
</script>
