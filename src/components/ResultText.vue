<template>
  <div class="result">
    <h1 class="text">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ResultText', 
  props: {
    text: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aleo:wght@300&display=swap');

.result {
  width: 25vw;
  display: flex;
  justify-content: center;
}

.text {
  font-family: 'Aleo', serif;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: #A02626
}

@media (max-width: 1100px) {
  .result {
    width: 45vw
  }

  .text {
    font-size: 2.2em;
    line-height: 30px;
  }
}
</style>