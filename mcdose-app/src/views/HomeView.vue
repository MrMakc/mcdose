<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useApiStore } from '@/stores/api';

const fastfood = useApiStore();
const fastFoodList = ref([]);
const allowedKcal = ref(0);

// Get list of fast food
fastfood.getAllFastFood();
fastFoodList.value = fastfood.fastFoods;

// Variables
const sexe = ref(0);
const weight = ref(0);
const size = ref(0);
const age = ref(0);
const activity = ref(0);

const containerForm = ref(false);
const containerResults = ref(true);



// Calculation function for kcal
function calculateMaxKcal() {
  let maxKcal: number = 0;

  if (sexe.value == 1) {
    // Homme
    maxKcal = 88.362 + (13.397 * weight.value) + (4.799 * size.value) - (5.677 * age.value);
  } else {
    // Femme
    maxKcal = 447.593 + (9.247 * weight.value) + (3.098 * size.value) - (4.330 * age.value);
  }

  console.log(maxKcal * activity.value);

  allowedKcal.value = Math.round(maxKcal * activity.value);
  containerForm.value = false;
  containerResults.value = true;
}

</script>

<template>
  <main>
    <div v-show="containerForm" class="general-info">
      <h2>Informations générales</h2>
      <div class="form-container">
        <label>Vous êtes...</label>
        <select v-model="sexe">
          <option value="1">Un homme</option>
          <option value="2">Une femme</option>
        </select>
      </div>
      <div class="form-container">
        <label>Votre poids (kg)</label>
        <input type="number" v-model="weight" />
      </div>
      <div class="form-container">
        <label>Votre taille (m)</label>
        <input type="number" v-model="size" />
      </div>
      <div class="form-container">
        <label>Votre âge (en années)</label>
        <input type="number" v-model="age" />
      </div>
      <div class="form-container">
        <label>Votre activité physique au quotidien</label>
        <select v-model="activity">
          <option value="1.2">Vous travaillez dans un bureau, ou avez une faible dépense sportive (sédentaire)</option>
          <option value="1.375">Vous vous entrainez 1 à 3 fois par semaine (légèrement actif)</option>
          <option value="1.55">Vous vous entrainez 3 à 5 fois par semaine (actif)</option>
          <option value="1.725">Vous faites quotidiennement du sport ou des exercices physiques très soutenus (très actif)</option>
          <option value="1.9">Vous êtes un sportif de haut niveau (extrêmement actif)</option>
        </select>
      </div>
      <div class="form-container">
        <button @click="calculateMaxKcal">Continuer</button>
      </div>

      <p class="disclaimer"><em>La formule d'Harris-Benedict a été utilisée pour calculer votre besoin en apport calorique théorique.</em></p>
    </div>
    <div v-show="containerResults" class="results">
      <p>Résultat : {{ allowedKcal }} kcal</p>
    </div>
  </main>
  <footer>
    <p class="copyright">Version 0.0.1 - By Maxime Hinderschiette & Cyprien Cotinaut - &copy 2024</p>
  </footer>
</template>