<template>
  <v-card class="mt-5">
    <v-card-title>
      Reservaciones Realizadas
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar mi reservación"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      disable-sort
      :headers="headers"
      :items="usersReservationsComputed"
      :search="search"
      :item-key="usersReservationsComputed.id"
      no-results-text="Sin Resultados"
      no-data-text="Sin Resultados"
      class="elevation-1"
      :loading="loading"
      :sort-desc="true"
      :footer-props="{
        showFirstLastPage: true,
        'items-per-page-text':'Reservaciones por pagina',
        'items-per-page-all-text': 'Todas',
      }"
      loading-text="Cargando... porfavor espere"
    ></v-data-table>
  </v-card>
</template>

<style>
thead.v-data-table-header.v-data-table-header-mobile {
  display: none;
}
</style>

<script>
  export default {
    props: {
      usersReservations: {
        type: Array,
        required: true,
        default: []
      },
      loading: {
        type: Boolean,
        required: true,
        default: true
      }
    },
    data: () => ({
      search: '',
      headers: [
        { text: 'Nombre', align: 'start', sortable: false, value: 'name' },
        { text: 'Apellido', sortable: false, value: 'lastname' },
        { text: 'N. Acompañantes', sortable: false, value: 'reservedSeats' },
        { text: 'Reservación solicitada', value: 'createdAt' },
        { text: 'N. Asiento', sortable: false, value: 'ticketsSeats' },
        { text: 'Horario', value: 'scheduleService' },
      ],
    }),

    computed: {
      usersReservationsComputed () {
        const userComputed = []
        this.usersReservations.map(user => {
          user.scheduleService = `${user.scheduleService} servicio`
          userComputed.push( user )
        })
        return userComputed
      }
    },
  }
</script>