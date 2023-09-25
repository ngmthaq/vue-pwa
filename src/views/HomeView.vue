<template>
  <main>
    <p>Hello World</p>
    <button @click="app.onOpenDialog">Open Dialog</button>
    <AlertComponent
      id="test"
      type="confirm"
      :open="app.isOpenAlert.value"
      @accept="app.onAcceptDialog"
      @deny="app.onDenyDialog"
    >
      Test Alert
    </AlertComponent>
  </main>
</template>

<script setup lang="ts">
import AlertComponent from "@/components/commons/AlertComponent.vue";
import { Component, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class HomeView extends Component {
    public isOpenAlert = this.ref(false);

    public constructor() {
      super();
    }

    public onOpenDialog = () => {
      this.isOpenAlert.value = true;
    };

    public onAcceptDialog = () => {
      this.isOpenAlert.value = false;
    };

    public onDenyDialog = () => {
      this.isOpenAlert.value = false;
    };
  },
);
</script>

<style scoped lang="scss">
main {
  background-color: $dark;
  color: $light;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
