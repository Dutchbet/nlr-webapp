


<script>

export default {
  name: 'all',
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