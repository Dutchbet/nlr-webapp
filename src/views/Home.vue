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
import all from '@/components/database-all';
import safe from '@/components/database-safe';
import warning from '@/components/database-warning';
import danger from '@/components/database-danger';
export default {
  components: {
    all,
    safe,
    warning,
    danger
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: 'All', content: 'all' },
        { tab: 'Safe', content: 'safe' },
        { tab: 'Warning', content: 'warning' },
        { tab: 'Danger', content: 'danger' }
      ]
    };
  }
};
</script>