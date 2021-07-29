<template>
    <div class="btn-area">
        <button class="btn">{{ btnText }}</button>
    </div>
</template>

<script>
export default {
  name: 'Button', 
  props: {
      btnText: String
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Aleo:wght@300&display=swap');

    .btn-area {
        display: flex;
        justify-content: center;
    }

    .btn {
        height: 10vh;
        width: 25vw;
        cursor: pointer;
        display: inline-block;
        background-color: #A02626;
        border-radius: 20px;
        font-size: 7vh;
        font-family: "Aleo", serif;
        font-weight: bold;
        border: 0;
        letter-spacing: 0.05em;
    }

    .btn:focus {
        outline: none;
    }

    .btn:hover {
        transform: scale(0.96);
    }
</style>