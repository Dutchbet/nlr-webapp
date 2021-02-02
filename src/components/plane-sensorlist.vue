<template>
<v-container>
  <v-row>
        <v-col cols="2">
          <div style="color:red; font-weight:bold; padding-bottom:30px">sensorlist</div>
          <draggable v-model="items" group="sensordata" tag="ul">

            <li v-for="item in items" :key="item.id" style="font-weight:bold;">
              {{item.name}}
            </li>
          </draggable>
        </v-col>
        <v-col cols="2">
          <div style="color:red; font-weight:bold; padding-bottom:30px">compairlist</div>
          <draggable v-model="data" group="sensordata" tag="ul">

            <li v-for="item in data" :key="item.id" style="font-weight:bold;">
              {{item.name}}
            </li>
          </draggable>
        </v-col>
</v-row>

<div class="wrapper">
 <Plotly :data="data" :layout="layout" :display-mode-bar="true"></Plotly>
</div>
</v-container>
</template>

<script>
  import draggable from 'vuedraggable'
  import { Plotly } from 'vue-plotly'
  
export default {
          components: {
            draggable,
            Plotly
        },
    data: () => ({
    items: [
         {
      id: 1,
      x: ["Jan","Feb","Mar","Apr","Mei","jun","Jul","Aug","Sep","Okt","Nov","Dec"],
      y: [15,35,13,17,25,90,25,100,50],
      type:"scatter",
      mode:"lines",
      name:"Left-aleron"
    },{
      id: 3,
      x: ["Jan","Feb","Mar","Apr","Mei","jun","Jul","Aug","Sep","Okt","Nov","Dec"],
      y: [15,35,13,17,70,90,110,100,50],
      type:"scatter",
      mode:"lines",
      name:"High Frequency Energy"
    },
    ],
    data:[
      {
        id: 4,
      x: ["Jan","Feb","Mar","Apr","Mei","jun","Jul","Aug","Sep","Okt","Nov","Dec"],
      y: [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],
      type:"scatter",
      name:'Exceeding limit value',
      mode:"lines"
      },         
    ],
    //
  }),   
}
</script>

<style>

</style>