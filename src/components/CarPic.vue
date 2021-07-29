<template>
  <div class="picture-area">
    <img class="picture" src="../assets/autko1.png" alt="auto" />
  </div>
</template>

<script>
    export default {
        name: 'CarPic'
    }
</script>

<style scoped>
    .picture-area {
        margin: 2em;
    }

    .picture {
        height: 20em;
        width: 20em;
        border-radius: 30px;
        object-fit: cover;
    }
</style>