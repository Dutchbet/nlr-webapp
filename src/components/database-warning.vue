<template>
  <v-data-table
    :headers="headers"
    :items="planes"
    :items-per-page="25"
    class="elevation-1"
    @click:row="PlaneClick"

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
        this.planes=this.planedata.filter(plane=>plane.priority=="WARNING")
      },

              PlaneClick(value) {
    this.$router.push({ name: 'Plane', params: { id: value.tailnumber  } });
    console.log(id)
    }
    }
  }
</script>