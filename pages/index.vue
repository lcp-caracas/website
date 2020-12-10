<template>
  <div class="bgMantenimiento">
    <div class="mantenimiento__container px-4 pb-2">
      <div class="mantenimiento__grid">
        <section class="align-self-center">
          <img src="~/static/img/logo.png" width="100" />
        </section>

        <section class="d-flex flex-column align-center main__title align-self-center text-center">
          <IconHomeMaintenance />
          <h3>Estamos Trabajando</h3>
          <span>Para servirte Mas y mejor</span>
        </section>

        <section class="d-flex flex-column align-center align-self-center">
          <span>siguenos en:</span>
          <div class="d-flex justify-center align-center">
            <a href="https://www.instagram.com/lcpcaracas" target="_blank" rel="noopener noreferrer" class="mx-2">
              <v-icon size="35">mdi-instagram</v-icon>
            </a>

            <a href="https://www.facebook.com/lacasademipadrevenezuela" target="_blank" rel="noopener noreferrer" class="mx-2">
              <v-icon size="35">mdi-facebook</v-icon>
            </a>

            <a href="https://www.youtube.com/channel/UCtttlnW0skxAug4MOo7CaeQ" target="_blank" rel="noopener noreferrer" class="mx-2">
              <v-icon size="35">mdi-youtube</v-icon>
            </a>
            <span>LCP-CARACAS</span>
          </div>
          <p class="text-center mt-4">
            Edf. Santa Fe, nivel Mezzanina. Calle Tito Salas. Bellas Artes - Caracas.
            <br/>
            Telefonos: 0212-578.59.69 / 0424-149.88.00
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bgMantenimiento {
    width: 100%;
    height: 100%;
    background-image: url('../static/img/Construccion-min.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .mantenimiento__grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20vh 50vh 30vh;
    justify-items: center;
  }

  .main__title h3 {
    font-size: 50px;
    text-transform: uppercase;

  }

  .main__title span {
    font-size: 30px;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    width: min-content;
    height: min-content;
  }

  a > i:hover {
    color:#ffc000;
  }

  @media screen and (min-width: 320px) and (max-width: 500px) {
    .main__title h3 {
      font-size: 30px;
    }

    .main__title span {
      font-size: 20px;
      text-transform: uppercase;
    }

    p {
      margin-bottom: 0;
    }
  }
</style>

<script>
import IconHomeMaintenance from '~/components/icons-components/IconHomeMaintenance'

export default {
  name: 'index',
  components: { IconHomeMaintenance }
}
</script>