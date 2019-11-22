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
    requestWeather: function () {
      var userInput = document.getElementById("zipcodeInput").value;
      alert(userInput);
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

    <form id="demo">
      <!-- text -->
      <p>
        <input id="zipcodeInput" type="text" placeholder="Enter Zip Code" pattern="^[0-9]{5}(-[0-9]{4})?$">
        <button v-on:click="requestWeather">Get Weather</button>
      </p>

    </form>
  </div>
    `
})

