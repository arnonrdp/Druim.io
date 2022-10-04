<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex">
    <q-toolbar class="q-gutter-xl">
      <RouterLink to="/">
        <q-img alt="Druim logo" src="@/assets/logo.svg" width="10rem" />
      </RouterLink>

      <q-space />

      <RouterLink to="/about">About us</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/work">Work</RouterLink>
      <RouterLink to="/contact">Contact us</RouterLink>
    </q-toolbar>
  </header>
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
