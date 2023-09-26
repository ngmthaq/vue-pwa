<template>
  <RouterView />
  <ToastComponent />
  <AlertComponent />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import ToastComponent from "./components/commons/ToastComponent.vue";
import AlertComponent from "./components/commons/AlertComponent.vue";
</script>

<style scoped lang="scss"></style>
