var apikey = config.APIKEY;
var app = new Vue({
  el: '#app',

  data () {
    return {
      weather: null,
      msg      : 'hello, world!'
    }
  },
  methods: {
    requestWeather: async function (e) {
      var userInput = document.getElementById("zipcodeInput").value;
      const response = await fetch("http://api.openweathermap.org/data/2.5/weather?zip=" + userInput + ",us&APPID=" + apikey);
      const data = await response.json();
      this.weather = data.main.temp;
    }
  },
  async mounted () {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?zip=60202,us&APPID=" + apikey);
    const data = await response.json();
    this.weather = data.main.temp;
  },
  template: `
  <div>
    Here's the weather in Evanston today:
    <h1>{{ weather }}</h1>

    <form id="demo" v-on:submit.prevent="requestWeather">
      <!-- text -->
      <p>
        <input id="zipcodeInput" type="text" placeholder="Enter Zip Code" pattern="^[0-9]{5}(-[0-9]{4})?$">
      </p>
      <button>Get Weather</button>
    </form>
  </div>
    `
})

// GOAL: Pass User input to call API then get response outputted...
// 1. v-on:click="requestWeather  to pass user input -->
// 2. useriNput --> async mounted ()
// 3. async mounted() --> zip code into response 