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
              <component v-bind:is="item.content" :headers="headers" :planedata="Planes" :to="item.to" link></component>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import all from "@/components/database-all";
import safe from "@/components/database-safe";
import warning from "@/components/database-warning";
import danger from "@/components/database-danger";
export default {
  components: {
    all,
    safe,
    warning,
    danger,
  },
  data() {
    return {
      headers: [
        {
          text: "Notification",
          align: "start",
          sortable: false,
          value: "header",
        },
        { text: "model", value: "model", sortable: false },
        { text: "Tailnumber", value: "tailnumber" },
        { text: "Date", value: "date" },
        { text: "Priority", value: "priority", sortable: false },
      ],
      Planes: [
        {
          header: "Tail sensor error",
          model: "F-16 A/B",
          tailnumber: "J-468",
          date: "24-10-2020",
          priority: "SAFE",
          to: '/activities',
        },
        {
          header: "Bomb release error",
          model: "F-16 A/B",
          tailnumber: "J-368",
          date: "14-10-2020",
          priority: "DANGER",
        },
        {
          header: " Radar Error",
          model: "F-16 A/B",
          tailnumber: "J-358",
          date: "04-10-2020",
          priority: "WARNING",
        },
                {
          header: "Target lock error",
          model: "F-16 A/B",
          tailnumber: "J-348",
          date: "04-02-2020",
          priority: "WARNING",
        },
                {
          header: "Gun Jam Error",
          model: "F-16 A/B",
          tailnumber: "J-158",
          date: "24-10-2019",
          priority: "SAFE",
        },
      ],

      tab: null,
      items: [
        { tab: "All", content: "all" },
        { tab: "Safe", content: "safe" },
        { tab: "Warning", content: "warning" },
        { tab: "Danger", content: "danger" },
      ],
    };
  },
};
</script>