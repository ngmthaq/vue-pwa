<template>
  <RouterView />
  <ToastComponent />
  <AlertComponent />
  <LoadingComponent />
  <RequestCookieComponent />
  <RequestNotificationComponent />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import ToastComponent from "./components/commons/ToastComponent.vue";
import AlertComponent from "./components/commons/AlertComponent.vue";
import LoadingComponent from "./components/commons/LoadingComponent.vue";
import RequestCookieComponent from "./components/commons/RequestCookieComponent.vue";
import RequestNotificationComponent from "./components/commons/RequestNotificationComponent.vue";
</script>

<style scoped lang="scss"></style>
