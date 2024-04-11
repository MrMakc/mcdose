<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useApiStore } from '@/stores/api';

const fastfood = useApiStore();
const fastFoodList = ref([]);

onMounted (async () => {
  await fastfood.getAllFastFood();
  fastFoodList.value = fastfood.fastFoods;
});

</script>

<template>
  <main>
    <h1>Liste</h1>
    <ul>
      <li v-for="fastFood in fastFoodList" :key="fastFood.id">
        {{ fastFood.nom }}
      </li>
    </ul>
  </main>
</template>
