<template>
    <section class="home__pray">
        <div class="home__pray--CTA">
            <v-btn
            to="/oraciones"
            rounded
            large
            color="#FFC000">
                <v-icon left>mdi-email</v-icon>
                Buzon de Peticiones
            </v-btn>

            <h3>
                <span>#</span>
                <span>Quedate</span>
                <span>En</span>
                <span>Casa</span>
            </h3>
        </div>

        <div class="home__pray--title">
            <h2>
                ¿Necesitas
                una oración?
            </h2>

            <p style="margin-top: 10px; padding-top: 10px;">
                Déjanos tu petición
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PxHomePray'
}
</script>

<style scoped>
    .home__pray {
        height: 100vh;
        background-image: url('../../../static/img/Oracion-min.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;

        display: grid;
        grid-template-columns: 5% 1fr 1fr 5%;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:    ". . . ."
                                ". cta title ."
                                ". . . .";
        align-items: center;
    }

    .home__pray--CTA {
        grid-area: cta;
    }

    .home__pray--CTA a.v-btn {
        color: #FFF;
        font-size: 26px;
        padding: 40px;
        margin-bottom: 15px;
    }

    .home__pray--CTA.i.v-icon {
        font-size: 40px;
        margin-right: 30px;
    }

    .home__pray--CTA h3 {
        color: #FFF;
        letter-spacing: 7px;
    }

    .home__pray--CTA h3 :nth-child(odd) {
        color: #FFC000;
    }

    .home__pray--title {
        grid-area: title;
        text-shadow: 0px 0px 8px rgba(32, 31, 31, 0.822);
        font-size: 30px;
        color: #FFF
    }

    .home__pray--title p {
        font-size: 0.5em;
        letter-spacing: 6.8px;
    }

@media (min-width: 320px) and (max-width: 767px) {
        .home__pray {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas:    "title"
                                    "cta";
        }

        .home__pray--title {
            margin-top: 70px;
        }

        .home__pray--CTA a.v-btn {
            color: #FFF;
            font-size: 1.1em;
            padding: 30px;
            margin-bottom: 15px;
        }

        .home__pray--CTA.i.v-icon {
            font-size: 40px;
            margin-right: 30px;
        }
    .home__pray--CTA h3 {
         /* font-size: 0.5em; */
        letter-spacing: 7px;
    }
}

</style>