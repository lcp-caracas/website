<template>
  <div class="header__phrase">
    <h2 class="header__frase">
      <span class="typed-text"><span style="color: white;">#</span>{{ typeValue }}|</span>
    </h2>
  </div>
</template>

<style scoped>
  .header__frase {
    background-color: #275287;
    color: #f2bf10;
    text-shadow: 0 0 3px #e4bf48;
    display: inline-block;
    width: 690px;
    font-size: 50px;
    align-self: center;
  }

@media (min-width: 320px) and (max-width: 767px) {
  .header__frase {
    width: 100%;
    font-size: 1.2em;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .header__frase {
    width: 100%;
    font-size: 50px;
    width: 800px;
  }
}

@media (min-width: 1024px) {
  .header__frase {
    width: 800px;
  }
}
</style>

<script>
export default {
  name: 'TypeSlogan',
  data: () => ({
    typeValue: '',
    typeStatus: false,
    typeArray: ['Donde Todos Tiene un Lugar'],
    typingSpeed: 90,
    erasingSpeed: 50,
    newTextDelay: 800,
    typeArrayIndex: 0,
    charIndex: 0
  }),


  methods: {
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
}
</script>
