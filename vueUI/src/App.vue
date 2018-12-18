<template>
  <div id="app">
    <div class="parent1">
      <Weather class="weather child" />
      <ToDo class="todo child" />
    </div>
    <div class="parent2">
      <Nest class="nest child" />
    </div>
    <div class="parent3">
      <Gram class="gram child" />
    </div>
  </div>
</template>

<script>
import Nest from './components/Nest.vue'
import Weather from './components/Weather.vue'
import ToDo from './components/Todo.vue'
import Gram from './components/Gram.vue'
export default {
  name: 'app',
  components: {
    Nest,
    Weather,
    ToDo,
    Gram
  }
}
</script>
<style>
.parent1 {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.parent2 {
  display: flex;
  justify-content: center;
}

caption {
  width: max-content;
}

li {
  list-style-type: none;
}

</style>
