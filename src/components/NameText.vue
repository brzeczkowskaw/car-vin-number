<template>
    <div class="name">
        <h1 class="text">{{ text }}</h1>
    </div>
</template>

<script>
export default {
  name: 'NameText', 
  props: {
      text: String
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Aleo:wght@300&display=swap');

    .name {
        width: 25vw;
        display: flex;
        justify-content: center;
    }

    .text {
        font-family: 'Aleo', serif;
        font-size: 30px;
        line-height: 40px;
        text-align: center;
    }
</style>