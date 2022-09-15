<template>
    <v-container>
        <h1 class="is-size-1 has-text-black">{{ message }}</h1>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RecipesView extends Vue {
  message = 'All recipes';
}
</script>
