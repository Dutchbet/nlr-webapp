<template>

  <v-data-table
    :headers="headers"
    :items="planedata"
    :items-per-page="25"
    class="elevation-1"
    @click:row="PlaneClick"
  >
  
  </v-data-table>
</template>

<script>
  export default {
    props:{
      headers:{
        type:Array
      },
      planedata:{
        type:Array
      }
    },
    data () {

      return {
        
      }
    },
    
methods: {
  PlaneClick(value) {
    this.$router.push({ name: 'Plane', params: { id: value.tailnumber  } });
    console.log(id)
  }
},
  }
</script>