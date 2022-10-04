<script setup>
import { RouterView } from 'vue-router'
import { TheHeader } from '@/components'
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
</template>
