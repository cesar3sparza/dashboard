<template>
  <div class="weather">
    <h1>WEATHER</h1>
    <p>Current Temperature: {{ temperature }}</p>
    <p>Current Summary: {{ summary }}</p>
    <p>Today's High: {{ tempHigh }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Weather',
  data: function() {
    return { 
      data: null,
      temperature: null,
      summary: null,
      tempHigh: null
    }
  },
  created(){
    axios.get('http://localhost:3000/weather', {
    })
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
      this.temperature = this.data.currently.temperature
      this.summary = this.data.currently.summary
      this.tempHigh = this.data.daily.data[0].temperatureHigh
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
