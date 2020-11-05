<template>
  <header>
    <div class="header__container">
      <div class="header__title">
        <h1>La Casa de mi padre</h1>
      </div>

      <TypeSlogan />

      <div class="header__direction">
        <p>Edf. Santa Fe, nivel Mezzanina. Calle Tito Salas. Bellas Artes – Caracas.</p>
        <p>Teléfonos: 0212 -578 5969 / 0424-149 8800</p>
      </div>
      <!-- <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span> -->
    </div>
  </header>
</template>

<script>
import TypeSlogan from '~/components/TypeSlogan'

export default {
  name: 'Header',
  components: { TypeSlogan }
}
</script>

<style scoped>
  header {
    height: 100vh;
    background-image: url('../../../static/img/alabanza.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:  "."
                          "header__content"
                          ".";
  }

  .header__container {
    grid-area: header__content;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    max-width: 1920px;
    align-items: center;
    justify-items: center;
  }

  .header__direction {
    color: whitesmoke;
    font-weight: 600;
    text-align: center;
    font-size: 20px;
  }

  h1 {
    color: whitesmoke;
    font-size: 100px;
    text-shadow: 0 0 5px #FFF, 0 0 10px #484848, 0 0 20px #275287;
  }

  .v-application p {
    margin: 0px;
  }


@media (min-width: 911px){
  .header__container {
    row-gap: 50px;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .header__container {
    grid-template-rows: min-content min-content min-content;
    row-gap: 1em;
  }

  .header__title h1 {
    font-size: 4.3em;
  }

  .header__frase {
    width: 100%;
    font-size: 1.2em;
  }

  .header__direction {
    font-size: 0.9em;
    padding: 0 5px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .header__container {
    grid-template-rows: min-content min-content min-content;
  }

  .header__title h1 {
    font-size: 100px;
  }

  .header__frase {
    width: 100%;
    font-size: 50px;
    width: 800px;
  }

  .header__direction {
    align-self: flex-start;
    font-size: 20px;
  }
}

@media (min-width: 1024px) {
  .header__frase {
    width: 800px;
  }
}
</style>