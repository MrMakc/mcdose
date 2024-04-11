import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useApiStore = defineStore('api', () => {

    // Define the API URL (Directus)
    const apiUrl: string = 'https://api-mcdose.maxhin.fr/api/';

    const fastFoods = ref([]);

      function getAllFastFood(): void {
        axios.get(apiUrl + 'content/items/fastfoods').then((response) => {
            fastFoods.value = response.data;
        }).catch((error) => {
            console.error(error);
        });
    }

    return { getAllFastFood, fastFoods }
})