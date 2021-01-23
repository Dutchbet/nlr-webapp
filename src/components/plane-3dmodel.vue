<template>
<div>

  <unity src="../static/Build/WebGL v2.json" width="1000" height="600" unityLoader="../static/Build/UnityLoader.js"></unity>  

</div>

</template>
 
<script>
  import unity from 'vue-unity-webgl'

export default {
  name: 'all',
  components: {
    unity
  },
}


</script>
