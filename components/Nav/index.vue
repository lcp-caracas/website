<template>
  <div>
    <v-app-bar color="transparent" flat dark>
      <v-spacer />
      <NuxtLink to="/">
        <img src="/img/logo.png" width="65px" />
      </NuxtLink>
      <v-spacer></v-spacer>

        <!-- <NuxtLink class="nuxtRoute" to="/predicas">
          Predicas
        </NuxtLink> -->

        <!-- <NuxtLink class="nuxtRoute" to="/oracion">
          Oraciones
        </NuxtLink> -->

      <v-btn
        to="/reservaciones"
        nuxt
        class="mx-1 amber lighten-1"
        outlined
        exact
        dark
      >
        <div style="color:#1565C0;">
          Reservaciones
        </div>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<style lang="scss" scoped>
.nuxtRoute {
  text-decoration: none;
  margin: 0 5px;
  font-weight: 500;
  color: white;
}
</style>

<script>
export default {
  name: 'Nav'
}
</script>