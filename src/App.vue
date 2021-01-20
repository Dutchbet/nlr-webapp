<template>
  <v-app id="nlr-webapp">
    <v-navigation-drawer app
    permanent
    left

    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Dashboard
          </v-list-item-title>
            <!-- Subtitel voor de navigation drawer
            <v-list-item-subtitle>
            </v-list-item-subtitle>
            -->
        </v-list-item-content>
      </v-list-item>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     <v-container class="my-12">
    <v-main>
      <router-view>
      </router-view>
    </v-main>
    </v-container> 
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
        items: [
          { title: 'Database', icon: 'mdi-poll', to: '/' },
          { title: 'Recent Activities', icon: 'mdi-email-open', to: '/activities' },
        ],
          
    //
  }),
};
</script>
