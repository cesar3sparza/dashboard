<template>
  <div class="gram parent3">
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Gram',
  data: function() {
    return { 
      data:''
    }
  },
  // next step, wrap created() in a function and run setinterval over the function
  created(){
    this.loadData()
    setInterval(function(){
      this.loadData()
    }.bind(this),60000)
  },
  methods: {
    loadData: function(){
      axios.get('http://localhost:5000/instagram', {
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.data = response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
