var app = new Vue({
  el: '#app',
  data () {
    return {
      weather: null
    }
  },
  async mounted () {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Evanston&APPID=${config.apiKey}`);
    const data = await response.json();
    this.weather = data.main.temp;
  },
  template: `
  <div>
    Here's the weather in Evanston today:
    <h1>{{ weather }}</h1>
  </div>
    `
})