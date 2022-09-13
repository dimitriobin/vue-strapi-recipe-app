<template>
  <h1 class="is-size-1 has-text-danger">{{ message }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeView extends Vue {
  message = 'This is a test';
}
</script>
