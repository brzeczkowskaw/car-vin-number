<template>
  <div class="slider">
    <CarPic :picSrc="picSrc1" :picAlt="picAlt1" />
    <CarPic :picSrc="picSrc2" :picAlt="picAlt2" />
    <CarPic :picSrc="picSrc3" :picAlt="picAlt3" />
  </div>
</template>

<script>
import CarPic from './CarPic.vue';

export default {
  name: 'Slider',
  components: {
    CarPic
  },
  data() {
    return {
      picSrc1: "",
      picSrc2: "",
      picSrc3: "",
      picAlt1: "",
      picAlt2: "",
      picAlt3: ""
    }
  },
  methods: {
    async getRandomPic() {
      const res = await fetch(
        "https://api.pexels.com/v1/search?query=car&orientation=square&per_page=1000",
        {
          method: "GET",
          headers: {
            "Authorization": "563492ad6f9170000100000191b38a10a6cf40c4b9fedcc52d133caf",
          }
        }
      );
      const results = await res.json();
      const car = JSON.stringify(results);
      const cars = JSON.parse(car);

      const random1 = Math.floor(Math.random() * 100 + 1);
      const random2 = Math.floor(Math.random() * 100 + 2);
      const random3 = Math.floor(Math.random() * 100 + 3);

      this.picSrc1 = cars.photos[random1].src.original;
      this.picAlt1 = cars.photos[random1].photographer;
      this.picSrc2 = cars.photos[random2].src.original;
      this.picAlt2 = cars.photos[random2].photographer;
      this.picSrc3 = cars.photos[random3].src.original;
      this.picAlt3 = cars.photos[random3].photographer;
    }
  },
  beforeMount() {
    this.getRandomPic();
  },
}
</script>

<style scoped>
.slider {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 5vh;
}
</style>