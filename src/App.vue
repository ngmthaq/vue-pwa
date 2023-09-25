<template>
  <RouterView />
  <ToastComponent />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import ToastComponent from "./components/commons/ToastComponent.vue";
</script>

<style scoped lang="scss"></style>
