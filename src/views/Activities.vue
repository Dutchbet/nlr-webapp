<template>
<v-container class="my-12">
  <div class="Activities">
    <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</v-container>

</template>

<script>
// @ is an alias to /src

import { Plotly } from 'vue-plotly'

export default {
  name: 'Activities',
  components: {
    Plotly
  },
  data:{
    data:[{
      x: [1,2,3,4],
      y: [10,15,13,17],
      type:"scatter"
    }],
    layout:{
      title: "My graph"
    }
  }
}
