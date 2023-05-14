<template>
  <section class="wrapper">
    <div v-for="i in sectionItems" class="wrapper__block"
    :style="{ backgroundColor: randomColor }"></div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        sectionItems: 6,
        randomColor: "green",
      }
    },
    methods: {
      getRandomColor() {
        this.randomColor = this.generateRandomHexColor();
      },
      generateRandomHexColor() {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        if (randomColor.length !== 7) {
          return this.generateRandomHexColor();
        } else {
          return randomColor;
        }
      },
    },
    mounted() {
      this.getRandomColor();
    }
  }
</script>

<style>
.wrapper {
  display: grid;    
  align-items: center;
  grid-template-columns: auto auto auto;
  gap: 20px;
  padding: 20px;
}
@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: auto auto;
  }
}
@media (max-width: 576px) {
  .wrapper {
    grid-template-columns: auto;
  }
}
.wrapper__block {
  cursor: pointer;
  border-radius: 20px;
  transition: transform .3s;
  height: 200px;
}
.wrapper__block:hover {
  transform: scale(1.045);
}
</style>
