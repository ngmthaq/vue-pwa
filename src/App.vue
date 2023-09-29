<template>
  <template v-if="app.isWorking.value">
    <RouterView />
    <ToastComponent />
    <AlertComponent />
    <LoadingComponent />
    <RequestCookieComponent />
    <RequestNotificationComponent />
  </template>
  <template v-else>
    <InternalErrorTemplate />
  </template>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { RouterView } from "vue-router";
import { APP_CONSTANTS } from "./constants/app.constant";
import { Component, defineClassComponent } from "./plugins/component.plugin";
import ToastComponent from "./components/commons/ToastComponent.vue";
import AlertComponent from "./components/commons/AlertComponent.vue";
import LoadingComponent from "./components/commons/LoadingComponent.vue";
import RequestCookieComponent from "./components/commons/RequestCookieComponent.vue";
import RequestNotificationComponent from "./components/commons/RequestNotificationComponent.vue";
import InternalErrorTemplate from "./templates/InternalErrorTemplate.vue";

const app = defineClassComponent(
  class App extends Component {
    public isWorking: Ref = this.ref(true);

    public constructor() {
      super();

      this.eventBus.on(APP_CONSTANTS.eventBus.executeInternalError, () => {
        this.isWorking.value = false;
      });
    }
  },
);
</script>

<style scoped lang="scss"></style>
