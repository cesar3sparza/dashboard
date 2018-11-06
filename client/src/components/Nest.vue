<template>
  <div class="nest">
    <div v-for="camera in cameras" class="nestImg">
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
      cameras: null,
      images: []
    }
  },
  // next step, wrap created() in a function and run setinterval over the function
  created(){
    this.loadData()
    // setInterval(function(){
    //   this.loadData()
    // }.bind(this),60000)
  },
  methods: {
    loadData: function(){
      axios.get('http://localhost:3000/nest', {
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.data = response.data
        this.cameras = this.data.devices.cameras
        var camImages = []
        for(var key in this.cameras){
          if(this.cameras.hasOwnProperty(key)){
            console.log(key + ":" + this.cameras[key].last_event.animated_image_url)
            camImages.push(this.cameras[key].last_event.animated_image_url)
          }
        }
        this.images = camImages
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
