<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" v-show="totalReservations < 100">
          <h2 style="text-align:center;">Reservaciones disponibles {{ reservationsAvailable }}</h2>
        </v-col>

        <v-col cols="12" v-show="totalReservations === 100">
          <h2 style="text-align:center;">Sin Cupos</h2>
        </v-col>
      </v-row>

      <Form v-if="totalReservations < 100" v-on:new-reservation="countReservations" />
      <UserReservationsTable :loading="loadingReservations" :usersReservations="usersReservations" />
    </v-container>
  </section>
</template>

<script>
import { db } from '~/services/firebase/index'
import Form from '~/components/Form'

export default {
  name: 'Reservaciones',
  components: { Form },
  data: () => ({
    usersReservations: [],
    totalReservations: 0,
    loadingReservations: true
  }),

  created() {
    this.countReservations()
  },

  computed: {
    reservationsAvailable() {
      const limitReservations = 100
      return limitReservations - this.totalReservations
    }
  },

  methods: {
    countReservations() {
      this.usersReservations.splice(0)
      this.loadingReservations = true
      this.totalReservations = 0

      setTimeout(() => {
        db.collection('reservaciones').get()
          .then(reservations => {
            reservations.forEach(doc => {
              if (doc.id !== 'totalReservaciones') {
                const id = doc.id
                const data = doc.data()
                const { createdAt } = data
                const createdAtSeconds = createdAt.seconds
                const date = new Date(createdAt.seconds * 1000)
                const normalizedCreatedAt = new Intl.DateTimeFormat('es-VE').format(date)
                const reservation = { ...data, id, createdAt: normalizedCreatedAt, createdAtSeconds }

                this.usersReservations.push(reservation)
              }
              else {
                console.log(doc.data().total)
                this.totalReservations = doc.data().total
              }
            })
          })
        .then(() => this.loadingReservations = false)
        .catch(err => console.error(err))
      }, 1000);
    },
  },
}
</script>
