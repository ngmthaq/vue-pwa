<template>
  <main>
    <p>Hello World</p>
  </main>
</template>

<script setup lang="ts">
import { Component, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class HomeView extends Component {
    public constructor() {
      super();
    }
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
