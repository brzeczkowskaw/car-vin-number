<template>
    <div class="input-area">
        <input type="text" class="input" />
    </div>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Aleo:wght@300&display=swap');

    .input-area {
        display: flex;
        justify-content: center;
    }

    .input {
        height: 10vh;
        width: 25vw;
        cursor: pointer;
        display: inline-block;
        background-color: #F0F0F0;
        border-radius: 20px;
        font-size: 5.5vh;
        font-family: "Aleo", serif;
        font-weight: bold;
        border: 0;
        letter-spacing: 0.05em;
        text-align: center;
        outline: none;
    }
</style>