console.log('Script connected.')
import config from './config.js';

new Vue({
    el: '#display-weather',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?zip=60202,us&APPID=${config.apiKey}`)
        .then(response => (this.info = response))
    }
})