<template>
  <main>
    <div class="main__container">
      <div class="main__mainText">
        <h2>
          <span>#</span>
          <span>Quedate</span>
          <span>En</span>
          <span>Casa</span>
        </h2>
      </div>

      <div class="main_mainIcon">
        <v-icon dark>mdi-home</v-icon>
      </div>

      <div class="main__phrase">
        <p>«AMAMOS AL PROJIMO Y A</p>
        <p>NOSOTROS MISMOS»</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style scoped>
    main {
        height: 100vh;
        background-image: url('../../../static/img/Pared-Ladrillos-min.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:    ". . ."
                                ". header__content ."
                                ". . .";
    }

    .main__container {
        grid-area: header__content;
        height: auto;
    }

    .main__mainText {
        text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.445);
        font-size: 60px;
        color: #FFF
    }

    .main__mainText h2 :nth-child(odd) {
        color: #FFC000;
    }

    .main_mainIcon {
        margin-bottom: 20px;
    }

    .main_mainIcon .v-icon.v-icon {
        font-size: 80px;
    }

    .main__phrase {
        letter-spacing: 2.5px;
        color: #FFF;
    }


@media (min-width: 320px) and (max-width: 767px) {
    .main__mainText {
        font-size: 1.7em;
    }

    .main_mainIcon .v-icon.v-icon {
    font-size: 5em;
    }

    .main__phrase {
    font-size: 1em;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {

}

</style>