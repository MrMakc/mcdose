<script setup lang="ts">
  import { useApiStore } from '@/stores/api';
  const fastfood = useApiStore();

  fastfood.getAllFastFood();
</script>

<template>
  <main>

  </main>
</template>
