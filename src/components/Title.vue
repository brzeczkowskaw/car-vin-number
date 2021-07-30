<template>
  <div class="title">
    <h1 class="text">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Title', 
  props: {
    text: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aleo:wght@300&display=swap');

.title {
  width: 25vw;
  display: flex;
  justify-content: center;
}

.text {
  font-family: 'Aleo', serif;
  font-size: 3em;
  text-align: center;
}

@media (max-width: 1100px) {
  .text {
    font-size: 2em;
  }

  .title {
    width: 40vw;
  }
}
</style>