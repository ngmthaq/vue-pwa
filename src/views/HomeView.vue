<template>
  <main>
    Hello World <button @click="app.onClick"><i class="bi bi-0-circle"></i></button>
  </main>
</template>

<script setup lang="ts">
import { Component, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class HomeView extends Component {
    public constructor() {
      super();

      this.watch(this.route, (route) => {
        console.log(route);
      });
    }

    public onClick = () => {
      const value = Math.random();
      this.changeQueryParams({ data: value });
    };
  },
);
</script>

<style scoped lang="scss">
main {
  color: $primary;
}
</style>
