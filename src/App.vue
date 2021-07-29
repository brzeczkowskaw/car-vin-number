<template>
  <div id="app">
    <div>
      <Ilustration />
    </div>
    <Slider />
    <div class="frames">
      <SearchFrame />
      <ResultFrame />
    </div>
  </div>
</template>

<script>
import Ilustration from './components/Ilustration.vue';
import SearchFrame from './components/SearchFrame.vue';
import ResultFrame from './components/ResultFrame.vue';
import Slider from './components/Slider.vue';


export default {
  name: 'App',
  components: {
    Ilustration,
    SearchFrame,
    ResultFrame,
    Slider
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
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
</style>
