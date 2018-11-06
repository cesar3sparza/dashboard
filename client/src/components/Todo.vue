<template>
  <div class="todo">
    <h1>ToDo</h1>
    <ul>
      <li v-for="task in tasks" @click="markasDone(task)"><vue-simple-markdown :source="task.content"></vue-simple-markdown></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ToDo',
  data: function() {
    return { 
      tasks: [],
      input: '# hello'
    }
  },
  created(){
    this.loadData()
  },
  methods: {
    markasDone: function(task){
      var closeTask = confirm('Close this task')
      closeTask
      if(confirm){
        axios({
        method: 'post',
        url: 'http://localhost:3000/todo/' + task.id
      })
      .then(function(){
          loadData()
        })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        })
      }
    },
    loadData: function(){
      axios.get('http://localhost:3000/todo', {
      })
      .then(response => {
        this.tasks=response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
