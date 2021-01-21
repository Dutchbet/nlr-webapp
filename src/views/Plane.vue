<template>
  

    <v-container>
         <div class="post">
      <h1>Data profiel {{$route.params.id}} </h1>

  </div>
    <v-card>
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <v-card-text>
              <component v-bind:is="item.content"></component>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import planedata from "@/components/plane-data";
import sensorlist from "@/components/plane-sensorlist";
import model from "@/components/plane-3dmodel";
export default {
  components: {
    planedata,
    sensorlist,
    model,
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: "Data", content: "planedata" },
        { tab: "Sensor list", content: "sensorlist" },
        { tab: "3D Model", content: "model" },
      ],
    };
  },
};
</script>


<style>

</style>