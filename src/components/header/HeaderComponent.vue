<template>
  <section class="container-fluid custom-container">
    <header class="header-component">
      <a href="/" class="logo">TH@NQ</a>
      <button type="button" class="btn nav-button">
        <i class="bi bi-list"></i>
      </button>
    </header>
  </section>
</template>

<script setup lang="ts">
import { Component, defineClassComponent } from "@/plugins/component.plugin";

defineClassComponent(class HeaderComponent extends Component {});
</script>

<style scoped lang="scss">
.custom-container {
  background-image: linear-gradient(to bottom, rgba(#000, 0.4), transparent);

  & .header-component {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: $z-index-cv-header;

    & .logo {
      font-size: 60px;
      font-weight: 800;
      text-decoration: none;
      color: $light;
    }

    & .nav-button {
      font-size: 48px;
      font-weight: 800;
    }
  }
}
</style>
