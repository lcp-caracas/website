<template>
  <div>
    <p class="text-center">{{ id }}</p>
    <svg
      :class="{ chairAviable: !chairState.ocupado, chairDisable: chairState.ocupado }" @click="verificarAsiento( id )"
      width="41"
      height="40"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.08511 21.3511H47.9149V39.5C47.9149 45.0228 43.4377 49.5 37.9149 49.5H13.0851C7.56225 49.5 3.08511 45.0228 3.08511 39.5V21.3511Z"
        :fill="chairState.asientoColor"
      />
      <path
        d="M47.0014 24H3.99855C3.48125 24 3.04934 23.6055 3.00263 23.0903L1.09884 2.09029C1.04576 1.50476 1.50682 1 2.09476 1H25.5H48.9052C49.4932 1 49.9542 1.50476 49.9012 2.09029L47.9974 23.0903C47.9507 23.6055 47.5187 24 47.0014 24Z"
        :fill="chairState.respaldoColor"
      />
    </svg>
  </div>
</template>

<style scoped>
.chairAviable {
  cursor: pointer;
}

.chairDisable {
  cursor: default;
}
</style>

<script>
export default {
  name: 'Chair',
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
    asientosReservados: {
      type: Array,
      required: true,
      default: []
    },
    usersReservations: {
      type: Array,
      required: true,
      default: []
    },
    scheduleService: {
      type: String
    },
  },
  data: () => ({
    chairState: {
      ocupado: false,
      seleccionado: false,
      asientoColor: '#7DD37B',
      respaldoColor: '#61a160'
    }
  }),

  watch: {
    asientosReservados (newVal, OldVal) {
      this.testTwo()
    }
  },

  methods: {
    verificarAsiento ( id ) {
        this.chairState.ocupado ?
          console.log('asiento ocupado')
        :
          this.seleccionarAsiento( id )
    },

    seleccionarAsiento ( id ) {
      this.chairState.seleccionado = !this.chairState.seleccionado
      this.validarColor()
      this.$emit('chair-selected', id)
    },

    testTwo () {
      // console.log(this.asientosReservados.includes(this.id))
      // console.log(this.asientosReservados)
      if (this.asientosReservados.includes(this.id)) {
        this.chairState.ocupado = true
        this.chairState.asientoColor = '#5f5f5f'
        this.chairState.respaldoColor = '#838383'
      }
      else {
        this.chairState.ocupado = false
        this.chairState.asientoColor = '#7DD37B'
        this.chairState.respaldoColor = '#61a160'
      }
    },

    validarColor () {
      if( this.chairState.ocupado ) {
        this.chairState.asientoColor = '#5f5f5f'
        this.chairState.respaldoColor = '#838383'

      } else if ( this.chairState.seleccionado ) {
        this.chairState.asientoColor = '#5691ff'
        this.chairState.respaldoColor = '#31569b'

      } else if ( this.chairState.ocupado === false ) {
        this.chairState.asientoColor = '#7DD37B'
        this.chairState.respaldoColor = '#61a160'
      }
    },
  },

  // mounted() {
  //   this.testTwo()
  // },

}
</script>
