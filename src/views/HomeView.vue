<template>
  <main>
    <HeaderComponent />
    <div class="container-fluid">
      <BannerComponent />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import BannerComponent from "@/components/banner/BannerComponent.vue";
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
  width: 100%;
}
</style>
