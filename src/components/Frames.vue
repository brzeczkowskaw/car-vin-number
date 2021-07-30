<template>
  <div class="frames">
    <div class="frame">
      <form class="search-area" @submit="submitForm">
        <Title class="title" text="Please enter your plate number" />
        <input type="text" class="input" v-model="plate" />
        <button type="submit" class="btn" v-on:click="getCar">Send</button>
      </form>
    </div>
    <div class="frame">
      <div class="result-area">
        <NameText text="Trade name" />
        <ResultText :text="trade" />
        <NameText text="Date of first admission" />
        <ResultText :text="date" />
        <NameText text="Fuel description" />
        <ResultText :text="fuel" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue';
import NameText from './NameText.vue';
import ResultText from './ResultText.vue';

export default {
  name: 'Frames',
  components: {
    Title,
    NameText,
    ResultText
  },
  
  data() {
    return {
      plate: '',
      plateNumber: '',
      trade: "",
      date: "", 
      fuel: ""
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault()
      console.log(this.plate)
    },
    async getCar() {
      const res = await fetch(
        "https://api.overheid.io/voertuiggegevens/" + this.plate,
        {
          method: "GET",
          headers: {
            "ovio-api-key": "b0514e3e1df0d5bc869bd54304a85525122a47ddddf1e381f43ab348035c23c1"
          }
        }
      );
      const results = await res.json();
      const carData = JSON.stringify(results);
      const selectedData = JSON.parse(carData);

      this.plateNumber = selectedData;
      this.trade = this.plateNumber.merk + ' ' + this.plateNumber.handelsbenaming;
      this.date = this.plateNumber.datum_eerste_toelating;
      this.fuel = this.plateNumber.brandstof[0].brandstof_omschrijving;
    } 
  }
}
</script>

<style scoped>
.frames {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10vh;
  margin-top: 10vh;
}

.frame {
  height: 80vh;
  width: 35vw;
  background: rgba(82, 93, 181, 0.7);
  box-shadow: 10px 15px 4px rgba(33, 17, 17, 0.3);
  border-radius: 50px;
}

.search-area {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr .5fr .5fr; 
  grid-template-areas: 
    "title"
    "input"
    "button";
  justify-items: center;
}

.title { 
  grid-area: title; 
  margin-top: 10%;
}

.input { 
  grid-area: input; 
  height: 10vh;
  width: 25vw;
  cursor: pointer;
  display: inline-block;
  background-color: #F0F0F0;
  box-shadow: inset 8px 7px 4px rgba(23, 10, 10, 0.25);
  border-radius: 20px;
  font-size: 5.5vh;
  font-family: "Aleo", serif;
  font-weight: bold;
  border: 0;
  letter-spacing: 0.05em;
  text-align: center;
  outline: none;
}

.button { 
  grid-area: button; 
}

.btn {
  height: 10vh;
  width: 25vw;
  cursor: pointer;
  display: inline-block;
  background-color: #A02626;
  box-shadow: inset 8px 7px 4px rgba(23, 10, 10, 0.25);
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

.result-area {
  height: 100%;
  display: grid;
  text-align: center;
  justify-items: center;
  padding-top: 2vh;
}
</style>