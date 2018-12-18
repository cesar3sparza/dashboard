<template>
  <div class="nest parent2">
    <div v-for="camera in cameras" :key="camera._id" class="nestImg child">
      <caption>{{ camera.where_name }}</caption>
      <a :href="camera.public_share_url">
        <img :src="camera.last_event.animated_image_url">
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Nest',
  data: function() {
    return { 
      data:'',
      cameras: null
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
      axios.get('http://localhost:5000/nest', {
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.data = response.data
        this.cameras = this.data.devices.cameras
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
