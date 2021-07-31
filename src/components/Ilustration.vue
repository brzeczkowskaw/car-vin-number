<template>
    <div class="ilustration">
    </div>
</template>

<script>
export default {
  name: 'Ilustration'
}
</script>

<style scoped>
.ilustration {
  height: 80vh;
  margin-top: -15vh;
  position: relative;
  background-image: url(../assets/autko1.png);
  background-size: cover;
}

@media (min-width: 721px) and (max-width: 1100px) {
  .ilustration {
    height: 40vh;
    margin-top: -5vh;
  }
}

@media (min-width: 531px) and (max-width: 720px) {
  .ilustration {
    height: 40vh;
    margin-top: -5vh;
  }
}

@media (min-width: 401px) and (max-width: 530px) {
  .ilustration {
    height: 30vh;
    margin-top: -5vh;
  }
}

@media (max-width: 400px) {
  .ilustration {
    height: 25vh;
    margin-top: -1vh;
  }
}

</style>

