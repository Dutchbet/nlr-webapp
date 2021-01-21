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
      y: [100,100,100,100],
      type:"scatter",
      name:'Exceeding limit value',
      line: {color:"red"},
      mode:"lines"
      
    },{
      x: [],
      y: [15,35,13,17],
      type:"scatter",
      mode:"lines"
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

      methods:{
      loading(){
        console.log(this.data.length)
        for (var [i] of this.data.entries()){
          this.data[i].x=["Jan","Feb","Mar","Apr"]
        console.log()
        }
      },
  
      }
}
</script>