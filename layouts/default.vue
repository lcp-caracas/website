<template>
  <v-app>
    <Nav />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

export default {
  name: 'LayoutDefault',
  components: { Nav }
}
</script>