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

      <Form v-on:newReservation="countReservations" />
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

    // usersReservations: [
    //   {
    //     companions: 3,
    //     email: "kevin@gmail.com",
    //     lastname: "blanco",
    //     name: "Kevin",
    //     phone: "04125544458",
    //     createdAtSeconds: 1604581271,
    //     createdAt: '5/10/2020'
    //   },
    //   {
    //     companions: 5,
    //     email: "yrving@gmail.com",
    //     lastname: "blanco",
    //     name: "yrving",
    //     phone: "04125544458",
    //     createdAtSeconds: 1604579271,
    //     createdAt: '12/09/2020'
    //   },
    //   {
    //     companions: 5,
    //     email: "kevin@gmail.com",
    //     lastname: "Pena",
    //     name: "Mario",
    //     phone: "04125544458",
    //     createdAtSeconds: 1604691271,
    //     createdAt: '13/09/2020'
    //   },
    //   {
    //     companions: 3,
    //     email: "grismeda@gmail.com",
    //     lastname: "blanco",
    //     name: "Grismeda",
    //     phone: "04125544458",
    //     createdAtSeconds: 1604574871,
    //     createdAt: '14/09/2020'
    //   },
    //   {
    //     companions: 1,
    //     email: "genesis@gmail.com",
    //     lastname: "blanco",
    //     name: "Genesis",
    //     phone: "04125544458",
    //     createdAtSeconds: 1604576371,
    //     createdAt: '15/09/2020'
    //   },
    //   {
    //     companions: 6,
    //     email: "Valeria@gmail.com",
    //     lastname: "blanco",
    //     name: "Valeria",
    //     phone: "04125544458",
    //     createdAtSeconds: 16045748781,
    //     createdAt: '16/09/2020'
    //   },
    // ],
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

      db.collection('reservaciones').get()
        .then(reservations => {
          reservations.forEach(doc => {
            if (doc.id === 'totalReservaciones') {
              this.totalReservations = doc.data().total
            }
            else {
              const id = doc.id
              const data = doc.data()
              const { createdAt } = data
              const createdAtSeconds = createdAt.seconds
              const date = new Date(createdAt.seconds * 1000)
              const normalizedCreatedAt = new Intl.DateTimeFormat('es-VE').format(date)
              const reservation = { ...data, id, createdAt: normalizedCreatedAt, createdAtSeconds }

              this.usersReservations.push(reservation)
            }
          })
        })
        .then(() => this.loadingReservations = false)
        .catch(err => console.error(err))
    },
  },
}
</script>
