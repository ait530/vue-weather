var apikey = config.APIKEY;
var app = new Vue({
  el: '#app',

  data () {
    return {
      weather: null,
      fahrenheit: null,
      city: null
    }
  },
  methods: {
    requestWeather: async function (e) {
      var userInput = document.getElementById("zipcodeInput").value;
      const response = await fetch("http://api.openweathermap.org/data/2.5/weather?zip=" + userInput + ",us&APPID=" + apikey);
      const data = await response.json();
      this.weather = data.main.temp;
      this.city = data.name;
      this.fahrenheit = Math.round(((((this.weather - 273.15) * 9) / 5) + 32));

    }
  },
  async mounted () {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?zip=60202,us&APPID=" + apikey);
    const data = await response.json();
    this.weather = data.main.temp;
    this.city = data.name;
    this.fahrenheit = Math.round((((this.weather - 273.15) * 9) / 5) + 32);

    
  },
  template: `
  <div>
    Here's the weather in {{ city }} today:
    <h1>{{ weather }}</h1>

    <h2>{{ fahrenheit }} &ordm;F</h2>

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

