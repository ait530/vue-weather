var apikey = config.APIKEY;
var app = new Vue({
  el: '#app',

  data () {
    return {
      weather: null,
      city: null,
      description: null,
      feelsLike: null
    }
  },
  methods: {
    requestWeather: async function (e) {
      var userInput = document.getElementById("zipcodeInput").value;
      const response = await fetch("http://api.openweathermap.org/data/2.5/weather?zip=" + userInput + ",us&APPID=" + apikey + "&units=imperial");
      const data = await response.json();
      this.weather = data.main.temp;
      this.city = data.name;
      this.description = data.weather[0].description;
      this.feelsLike = data.main.feels_like;

    }
  },
  async mounted () {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?zip=60202,us&APPID=" + apikey + "&units=imperial");
    const data = await response.json();
    this.weather = data.main.temp;
    this.city = data.name;
    this.description = data.weather[0].description;
    this.feelsLike = data.main.feels_like;

  
  },
  template: `
  <div>
    Here's the weather in {{ city }} today:
    <h1>{{ weather }} &ordm;F</h1>

    <h2>{{ description }}</h2>

    <h2> Feels like: {{ feelsLike }} &ordm;F</h2>

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

