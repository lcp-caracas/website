<template>
  <v-app>
    <Nav />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  name: 'LayoutDefault',
  components: { Nav }
}
</script>