<template>
  <div id="app">
    <Weather class="weather" />
    <ToDo class="todo" />
    <Nest class="nest" />
  </div>
</template>

<script>
import Nest from './components/Nest.vue'
import Weather from './components/Weather.vue'
import ToDo from './components/Todo.vue'
export default {
  name: 'app',
  components: {
    Nest,
    Weather,
    ToDo
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
  width: 25%;
}

.weather p {
  text-align: left;
}

.todo {
  float: left;
  height: auto;
  width: 25%;
}

.todo ul {
  position: relative;
  right: 4rem;
}

.weather h1 {
  margin-left: 6rem;
}

.weather ul {
  margin-left: 3rem;
}

h1 {
  position: relative;
  text-transform: uppercase;
  text-align: left;
}

li {
  list-style-type: none;
  text-align: left;
}

.nest .nestImg {
  float: left;
  width:50%;
}

.nest .nestImg caption {
  display: inherit;
  position: relative;
  right: 18rem;
  top: 4rem;
  text-transform: uppercase;
  font-weight: 700;
}

.nestImg img {
  width: 80%;
}
</style>
