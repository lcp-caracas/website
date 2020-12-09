<template>
  <section class="success-reservation">
    <v-container>
      <v-row align="center">
        <v-col cols="12" class="d-flex flex-wrap justify-center items-center">
          <h2 class="grey--text text--darken-1">Reservacion Exitosa</h2>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="6" class="d-flex flex-wrap justify-center items-center">
          <NuxtLink to="/">
            <h3>Volver al inicio</h3>
          </NuxtLink>
        </v-col>

        <v-col cols="6" class="d-flex flex-wrap justify-center items-center">
          <NuxtLink to="/reservaciones">
            <h3>Seguir reservando</h3>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
  .success-reservation {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: white;
  }

  a {
    text-decoration: none;
    color: rgb(250, 76, 76);
  }
</style>

<script>
export default {
  name: 'reservacion-exitosa'
}
</script>