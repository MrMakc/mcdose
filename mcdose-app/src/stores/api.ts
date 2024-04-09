import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useApiStore = defineStore('api', () => {

    // Define the API URL (Directus)
    const apiUrl: string = 'https://api-mcdose.maxhin.fr/api/';

     function getAllFastFood(): void {

        const fastFoods = ref(0);

        axios.get(apiUrl + 'content/items/fastfoods').then((response) => {
            fastFoods = response.data;
        }).catch((error) => {
            console.error(error);
        });
    }

    return { getAllFastFood, fastFoods }
})