<template>
  <RouterView />
  <ToastComponent />
  <AlertComponent />
  <LoadingComponent />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import ToastComponent from "./components/commons/ToastComponent.vue";
import AlertComponent from "./components/commons/AlertComponent.vue";
import LoadingComponent from "./components/commons/LoadingComponent.vue";
</script>

<style scoped lang="scss"></style>
