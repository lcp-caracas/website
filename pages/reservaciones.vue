<template>
  <section>
    <v-container fluid>
      <v-row justify="center" align-content="center">
        <v-col cols="12" v-show="totalReservations < 200" class="d-flex justify-center">
          <h2 style="text-align:center;">Reservaciones disponibles {{ reservationsAvailable }}</h2>
        </v-col>

        <v-col cols="12" v-show="totalReservations === 200" class="d=flex justify-center">
          <h2 style="text-align:center;">Sin Cupos</h2>
        </v-col>

        <v-col cols='6'>
          <Form />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { db } from '~/services/firebase/index'
import ScrollToTop from '~/utils/ScrollToTop'
import Form from '~/components/Form'

export default {
  name: 'Reservaciones',
  components: { Form },
  data: () => ({
    usersReservations: [],
    usersReservationsFirstService: [],
    usersReservationsSecondService: [],
    totalReservations: 0,
    loadingReservations: true,
    horario: ''
  }),

  created() {
    ScrollToTop()
    this.countReservations()
  },

  computed: {
    reservationsAvailable() {
      const limitReservations = 200
      return limitReservations - this.totalReservations
    },
  },

  methods: {
    async countReservations () {
      this.totalReservations = 0

      await db
        .collection('reservaciones')
        .onSnapshot(({ docs }) => {
          docs.forEach(doc => {
            doc.id !== 'totalReservaciones' ?
              console.error('No se encontro el total de reservaciones')
            :
              this.totalReservations = doc.data().total
              // console.log(doc.data().total)
          })
        })
    },
  },
}
</script>
