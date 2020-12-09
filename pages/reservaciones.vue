<template>
  <section class="reservationBg">
    <v-container fluid>
      <v-row justify="center" align-content="center">
        <v-col cols="12" v-show="totalReservations <= 200" class="reservations d-flex flex-column justify-center">
          <h2 style="text-align:center;">Reservaciones disponibles</h2>
          <h4 style="text-align:center;">
            Primer servicio: 
              {{
                totalReservationsFirstService === 100 ? 'Sin Cupos' : reservationsFirstServiceAvailable
              }}
          </h4>
          <h4 style="text-align:center;">
            Segundo servicio: 
              {{
                totalReservationsSecondService === 100 ? 'Sin Cupos' : reservationsSecondServiceAvailable
              }}
          </h4>
        </v-col>

        <v-col cols='7' v-if="totalReservations !== 200">
          <Form
            :totalReservationsSecondService="totalReservationsSecondService"
            :totalReservationsFirstService="totalReservationsFirstService"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
  .reservationBg {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .reservations {
    color: #585858
  }
</style>

<script>
import { db } from '~/services/firebase/index'
import ScrollToTop from '~/utils/ScrollToTop'
import Form from '~/components/Form'

export default {
  name: 'Reservaciones',
  components: { Form },
  data: () => ({
    totalReservationsFirstService: 0,
    totalReservationsSecondService: 0,
    sheduleService: '',
  }),

  created() {
    ScrollToTop()
    this.countReservations()
  },

  computed: {
    totalReservations() {
      return this.totalReservationsFirstService + this.totalReservationsSecondService
    },

    reservationsFirstServiceAvailable() {
      const limitReservations = 100
      return limitReservations - this.totalReservationsFirstService
    },

    reservationsSecondServiceAvailable() {
      const limitReservations = 100
      return limitReservations - this.totalReservationsSecondService
    },
  },

  methods: {
    async countReservations () {
      await db
        .collection('reservaciones')
        .onSnapshot(({ docs }) => {
          docs.forEach(doc => {
            if ( doc.id === 'totalReservationsFirstService' ){
              this.totalReservationsFirstService = doc.data().total
            } else if ( doc.id === 'totalReservationsSecondService' ) {
              this.totalReservationsSecondService = doc.data().total
            } else {
              console.error('No se ha encontrado el documento')
            }
          })
        })
    },
  },
}
// lcpcaracas
// redlcp*2020#CCS
</script>
