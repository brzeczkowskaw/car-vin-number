<template>
    <div class="slider">
        <img src="../assets/ArrowLeft2.png" alt="Arrow" />
        <CarPic />
        <CarPic />
        <CarPic />
        <img src="../assets/ArrowRight2.png" alt="Arrow" />
    </div>
</template>

<script>
import CarPic from './CarPic.vue';

export default {
  name: 'Slider',
  components: {
      CarPic
  }
}
</script>

<style scoped>
    .slider {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>