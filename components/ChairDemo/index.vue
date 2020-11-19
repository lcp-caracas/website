<template>
  <div style="width:102px" class="flex-column items-center text-center mx-4">
    <svg
      width="41"
      height="40"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.08511 21.3511H47.9149V39.5C47.9149 45.0228 43.4377 49.5 37.9149 49.5H13.0851C7.56225 49.5 3.08511 45.0228 3.08511 39.5V21.3511Z"
        :fill="asientoColor"
      />
      <path
        d="M47.0014 24H3.99855C3.48125 24 3.04934 23.6055 3.00263 23.0903L1.09884 2.09029C1.04576 1.50476 1.50682 1 2.09476 1H25.5H48.9052C49.4932 1 49.9542 1.50476 49.9012 2.09029L47.9974 23.0903C47.9507 23.6055 47.5187 24 47.0014 24Z"
        :fill="respaldoColor"
      />
    </svg>
      <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChairDemo',
  props: {
    respaldoColor: {
      type: String,
      required: true,
      default: '#838383'
    },
    asientoColor: {
      type: String,
      required: true,
      default: '#5f5f5f'
    },
    title: {
      type: String,
      required: true,
      default: 'Disponible'
    }
  }
}
</script>