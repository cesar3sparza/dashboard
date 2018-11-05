<template>
  <div id="app">
    <Weather class="weather" />
    <Nest class="nest" />
  </div>
</template>

<script>
import Nest from './components/Nest.vue'
import Weather from './components/Weather.vue'
export default {
  name: 'app',
  components: {
    Nest,
    Weather
  }
}
</script>
<style>
body {
  background-color: #566677;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}

.weather {
  float: left;
  height: auto;
  width: 50%;
}

.weather h1 {
  margin: 6rem 0 0 0
}

.nest .nestImg {
  float: left;
  width:50%;
}

.nestImg img {
  width: 80%;
}
</style>
