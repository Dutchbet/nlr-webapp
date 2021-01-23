<template>
<div class="post">
    <h1> data shizzle</h1>
 <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
 

</template>


<script>
import { Plotly } from 'vue-plotly'
 
export default {
  components: {
    Plotly
  },
    data: () => ({
    data:[{
      x: [],
      y: [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],
      type:"scatter",
      name:'Exceeding limit value',
      line: {color:"red"},
      mode:"lines"
      
    },{
      x: [],
      y: [15,35,13,17,70,90,110,100,50],
      type:"scatter",
      mode:"lines",
      name:"High Frequency Energy"
    },{
      x: [],
      y: [55,35,13,17,100,50,25,40,70,80],
      type:"scatter",
      mode:"lines",
      name:"GG 1R Cib"
    },{
      x: [],
      y: [25,45,33,17,55,23,42,170,20,40,80,100,100,20],
      type:"scatter",
      mode:"lines",
      name:"PT 1R Cib"
    }],
    layout:{
      title: "My graph",
      yaxis: {title:{text:"Percentage"}},
      xaxis: {title:{text:"Maand"}}
    },
    xaxis:[]
  }),
    created:function(){
      this.loading()
    },
/**loop om X-axis gelijk tek */
      methods:{
      loading(){
        console.log(this.data.length)
        for (var [i] of this.data.entries()){
          this.data[i].x=["Jan","Feb","Mar","Apr","Mei","jun","Jul","Aug","Sep","Okt","Nov","Dec"]
        console.log()
        }
      },
  
      }
}
</script>