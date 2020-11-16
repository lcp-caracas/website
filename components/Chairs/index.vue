<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex flex-wrap justify-center items-center">
        <v-btn color="blue" @click="reserve">Reservar {{ scheduleService }} servicio</v-btn>
      </v-col>
    </v-row>

    <Form
      :scheduleService="scheduleService"
      :asientosSeleccionados="selected"
      :dialog="dialog"
      v-on:close-dialog="closeDialog"
      v-on:new-reservation="newReservation"
    />

    <v-row align="center" justify="center">
      <v-col class="d-flex justify-center items-center" cols="2" v-for="(chair, index) in 100" :key="index">
        <Chair
          :scheduleService="scheduleService"
          :id="index+1"
          v-on:chair-selected="chairSelected"
          :usersReservations="usersReservations"
          :asientosReservados="asientosReservados"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex flex-wrap justify-center items-center">
        <v-btn color="blue" @click="reserve">Reservar {{ scheduleService }} servicio</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chair from './Chair'
import Form from '~/components/Form'

export default {
  name: 'Chairs',
  components: { Form },
  props: {
    usersReservations: {
      type: Array,
      required: true,
      default: []
    },
    scheduleService: {
      type: String,
      required: true,
    }
  },

  data: () => ({
    dialog: false,
    selected: [],
    resetChairsSelected: false
  }),

  mounted() {
    this.selected.splice(0)
  },

  computed: {
    asientosReservados () {
      const asientos = []
      this.usersReservations.forEach(user => user.ticketsSeats.forEach(idReserva => asientos.push(idReserva)))
      return asientos
    }
  },

  methods: {
    chairSelected ( id ) {
      console.log('asiento seleecionado', id)
      const index = this.selected.findIndex(item => item === id)

      if ( this.selected.includes( id ) )
        this.selected.splice( index, 1 )
      else
        this.selected.push( id )
    },

    newReservation() {
      console.log('reservacion creada con exito')
    },

    closeDialog () {
      this.dialog = false
    },

    reserve() {
      this.dialog = true
    },
  }
}
</script>
