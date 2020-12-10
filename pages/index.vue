<template>
  <div>
    <Header />
    <Main />
    <!-- <Services /> -->
    <Pray />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Header from '~/components/PageSections/Home/Header'
import Main from '~/components/PageSections/Home/Main'
import Pray from '~/components/PageSections/Home/Pray'
import Services from '~/components/PageSections/Home/Services'
import Worship from '~/components/PageSections/Home/Worship'

export default {
  name: 'Home',
  components: { Nav, Header, Main, Pray, Services, Worship },
}
</script>