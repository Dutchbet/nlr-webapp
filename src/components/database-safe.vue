<template>
  <v-data-table
    :headers="headers"
    :items="planes"
    :items-per-page="25"
    class="elevation-1"

  ></v-data-table>
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
        planes:[]
        
      }
    },
    created:function(){
      this.filterplanes()
    },
    methods:{
      filterplanes(){
        this.planes=this.planedata.filter(plane=>plane.priority=="SAFE")
      }
    }
  }
</script>