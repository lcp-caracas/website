<template>
    <section class="home__services">
        <div class="home__services--access">
            <h2>Accede a todas nuestras <br />
                Predicas y Servicios</h2> <br />
        <v-btn to="/servicios" large color="#f2bf10" style="color: #FFF;">Predicas y Servicios</v-btn>
        </div>

        <div class="home__services--mainService">
            <iframe
                src="https://www.youtube.com/embed/WF4WnjHD_vc"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PxHomeServices'
}
</script>

<style scoped>
    .home__services {
        height: 100vh;
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;

        display: grid;
        grid-template-columns: 40% 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:    "accessServices mainService";
        align-items: center;
        column-gap: 20px;
    }

    .home__services--access {
        grid-area: accessServices;
        text-align: center;
        justify-self: center;
        color: white;
    }

    .home__services--mainService {
        grid-area: mainService;
        text-align: center;
        justify-self: start;
        align-self:center;
        width:100%;
    }

    .home__services--mainService iframe {
        height: 400px;
        width: 90%;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        .home__services {
            grid-template-columns: 1fr;
            grid-template-rows: min-content min-content;
            grid-template-areas:    "mainService"
                                    "accessServices";
            height: auto;
            row-gap: 20px;
            padding-bottom: 50px;
        }

        .home__services--mainService {
            width:100%;
            height: 100%;
        }

        .home__services--mainService iframe {
            height: 400px;
            width: 90%;
        }
    }
</style>