<template>
  <div id="app">
    <div>
      <Ilustration />
    </div>
    <div>
      <Frames />
      <Slider />
    </div>
    <div class="signature">
      <p>Made with </p><p class="heart"> &#10084; </p> <p> by <a href="https://brzeczkowskaw.netlify.app/#/">Weronika</a></p>
    </div>
  </div>
</template>

<script>
import Ilustration from './components/Ilustration.vue';
import Slider from './components/Slider.vue';
import Frames from './components/Frames.vue';

export default {
  name: 'App',
  components: {
    Ilustration,
    Slider,
    Frames
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Aleo:wght@300&display=swap');

html,body{
  margin:0;
  padding:0;
  background-color: rgb(181,197,138);
}
#app {
  text-align: center;
  margin: 0;
  padding: 0;
}
.frames {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10vh;
  margin-top: 10vh;
}

.signature {
  font-family: 'Aleo', serif;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
}

a {
  text-decoration: none;
}

.heart {
  color: #A02626
}

*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: rgba(82, 93, 181, 0.7);
  border-radius: 2px;
}
</style>