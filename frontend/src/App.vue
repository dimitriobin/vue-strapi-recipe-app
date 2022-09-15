<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-4" dark class="px-5">
        <router-link to="/" class="has-text-white">Home</router-link>
        <router-link to="/recipes" class="has-text-white ml-5">Recipes</router-link>
        <router-link to="/about" class="has-text-white ml-5">About us</router-link>

        <v-spacer></v-spacer>

      <v-btn icon to="/account">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
