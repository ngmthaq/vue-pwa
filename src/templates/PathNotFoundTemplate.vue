<template>
  <main>
    <h1>404</h1>
    <div class="separator"></div>
    <p>{{ app.$t("title.notFound") }}</p>
  </main>
</template>

<script setup lang="ts">
import { Component, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(class PathNotFoundTemplate extends Component {});
</script>

<style scoped lang="scss">
main {
  background-color: $dark;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 64px;
    display: inline-block;
    margin: 0;
    margin-right: 32px;
    color: $danger;
  }

  & p {
    color: $light;
    margin-bottom: 0;
    margin-top: 16px;
    font-size: 16px;
  }

  & .separator {
    border-right: 1px solid $light;
    margin-right: 32px;
    height: 60px;
  }
}
</style>
