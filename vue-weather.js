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
      alert('connected');
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
        <input type="text">
        <button v-on:click="requestWeather">Get Weather</button>
      </p>

    </form>
  </div>
    `
})

