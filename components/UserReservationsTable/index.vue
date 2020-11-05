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
      :headers="headers"
      :items="usersReservations"
      :search="search"
      :item-key="usersReservations.lenght"
      class="elevation-1"
      :loading="loading"
      :sort-by="'createdAtSeconds'"
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
        { text: 'N. Acompañantes', sortable: false, value: 'companions' },
        { text: 'Reservación solicitada', value: 'createdAt' },
      ],
    }),
  }
</script>