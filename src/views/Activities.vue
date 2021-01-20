<template>
  <v-container>
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
import today from '@/components/activities-today';
import earlier from '@/components/activities-earlier';

export default {
  components: {
    today,
    earlier
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: 'Today', content: 'today' },
        { tab: 'Earlier', content: 'earlier' }

      ]
    };
  }
};
</script>