<template>
  <!-- Mario estuvo aquí. -->
  <div>
    <Header />
    <Main />
    <!-- <Services /> -->
    <Pray />
  </div>
</template>

<script>
import Header from '~/components/PageSections/Home/Header'
import Main from '~/components/PageSections/Home/Main'
import Pray from '~/components/PageSections/Home/Pray'
import Services from '~/components/PageSections/Home/Services'
import Worship from '~/components/PageSections/Home/Worship'

export default {
  name: 'Home',
  components: { Header, Main, Pray, Services, Worship },
}
</script>
