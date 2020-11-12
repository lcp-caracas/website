<template>
  <section>
    <v-container>
      <v-row justify="center" align-content="center">
        <v-col cols="12" v-show="totalReservations < 100" class="d-flex justify-center">
          <h2 style="text-align:center;">Reservaciones disponibles {{ reservationsAvailable }}</h2>
        </v-col>

        <v-col cols="12" class="d-flex align-center flex-wrap justify-center">
          <ChairDemo title="Ocupado" asientoColor="#838383" respaldoColor="#5f5f5f" />
          <ChairDemo title="Disponible" asientoColor="#7DD37B" respaldoColor="#61a160" />
          <ChairDemo title="Seleccionado" asientoColor="#5691ff" respaldoColor="#31569b" />
        </v-col>

        <v-col cols="12" v-show="totalReservations === 100" class="d=flex justify-center">
          <h2 style="text-align:center;">Sin Cupos</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" class="d-flex justify-center">
          <v-btn @click="selectFirstService">Primer Servicio</v-btn>
        </v-col>

        <v-col cols="6">
          <v-btn @click="selectSecondService">Segundo Servicio</v-btn>
        </v-col>
      </v-row>

      <Chairs
        v-show="horario === 'primer'"
        scheduleService="primer"
        :usersReservations="usersReservationsFirstService"
      />
      <Chairs
        v-show="horario === 'segundo'"
        scheduleService="segundo"
        :usersReservations="usersReservationsSecondService"
      />
      <UserReservationsTable :loading="loadingReservations" :usersReservations="usersReservations" />
    </v-container>
  </section>
</template>

<script>
import { db } from '~/services/firebase/index'
import Chairs from '~/components/Chairs'
import Form from '~/components/Form'
import ChairDemo from '~/components/ChairDemo'

export default {
  name: 'Reservaciones',
  components: { Form, ChairDemo },
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
    //     createdAt: '5/10/2020',
    //     scheduleService: 'primer',
    //     asientoReservado: 16
    //   },
    //   {
    //     companions: 5,
    //     email: "yrving@gmail.com",
    //     lastname: "blanco",
    //     name: "yrving",
    //     phone: "04125544458",
    //     createdAtSeconds: 1604579271,
    //     createdAt: '12/09/2020',
    //     scheduleService: 'segundo',
    //     asientoReservado: 50
    //   },
    //   {
    //     companions: 5,
    //     email: "kevin@gmail.com",
    //     lastname: "Pena",
    //     name: "Mario",
    //     phone: "04125544458",
    //     createdAtSeconds: 1604691271,
    //     createdAt: '13/09/2020',
    //     scheduleService: 'primer',
    //     asientoReservado: 25
    //   },
    //   {
    //     companions: 3,
    //     email: "grismeda@gmail.com",
    //     lastname: "blanco",
    //     name: "Grismeda",
    //     phone: "04125544458",
    //     createdAtSeconds: 1604574871,
    //     createdAt: '14/09/2020',
    //     scheduleService: 'segundo',
    //     asientoReservado: 32
    //   },
    //   {
    //     companions: 1,
    //     email: "genesis@gmail.com",
    //     lastname: "blanco",
    //     name: "Genesis",
    //     phone: "04125544458",
    //     createdAtSeconds: 1604576371,
    //     createdAt: '15/09/2020',
    //     scheduleService: 'primer',
    //     asientoReservado: 30
    //   },
    //   {
    //     companions: 6,
    //     email: "Valeria@gmail.com",
    //     lastname: "blanco",
    //     name: "Valeria",
    //     phone: "04125544458",
    //     createdAtSeconds: 16045748781,
    //     createdAt: '16/09/2020',
    //     scheduleService: 'segundo',
    //     asientoReservado: 17
    //   },
    // ],

    usersReservationsFirstService: [],
    usersReservationsSecondService: [],
    totalReservations: 0,
    loadingReservations: true,
    horario: ''
  }),

  created() {
    this.countReservations()
  },

  computed: {
    reservationsAvailable() {
      const limitReservations = 100
      return limitReservations - this.totalReservations
    },
  },

  methods: {
    userSeparated( reservation ) {
      reservation.scheduleService === "primer" ?
        this.usersReservationsFirstService.push( reservation )
      :
        this.usersReservationsSecondService.push( reservation )
    },

    selectFirstService () {
      this.horario = 'primer'
    },

    selectSecondService () {
      this.horario = 'segundo'
    },

    async countReservations () {
      this.usersReservations.splice(0)
      this.loadingReservations = true
      this.totalReservations = 0

      await db
        .collection('reservaciones')
        .onSnapshot(({ docs }) => {
          docs.forEach(doc => {
            if (doc.id !== 'totalReservaciones') {
              const id = doc.id
              const data = doc.data()
              const { createdAt } = data
              const createdAtSeconds = createdAt.seconds
              const date = new Date(createdAt.seconds * 1000)
              const normalizedCreatedAt = new Intl.DateTimeFormat('es-VE').format(date)
              const reservation = { ...data, id, createdAt: normalizedCreatedAt, createdAtSeconds }

              this.usersReservations.push(reservation)
              this.userSeparated( reservation )
            } else {
              console.log(doc.data().total)
              this.totalReservations = doc.data().total
            }
          })
        })
        this.loadingReservations = false
    },
  },
}
</script>
