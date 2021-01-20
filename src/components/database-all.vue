<template>
  <v-data-table
    :headers="headers"
    :items="planedata"
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
        
      }
    },
  }
</script>