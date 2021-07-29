<template>
  <div class="picture-area">
    <img class="picture" v-bind:src="picSrc" v-bind:alt="picAlt" />
  </div>
</template>

<script>
    export default {
        name: 'CarPic',
        props: {
            picSrc: String,
            picAlt: String
        }
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