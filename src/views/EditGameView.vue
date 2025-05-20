<!-- src/views/EditGameView.vue -->
<template>
  <div class="edit-page">
    <!-- Navbar (mismo estilo que InazumaView.vue) -->
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/api" class="nav-link">Dades API</router-link>
      <router-link to="/crud" class="nav-link">Inazuma Eleven</router-link>
    </nav>

    <!-- Contenedor de edición con fondo semitransparente -->
    <div class="edit-container">
      <h2>Edita el joc</h2>
      <div v-if="game">
        <div class="field">
          <label>Títol</label>
          <input v-model="game.title" class="input" />
        </div>
        <div class="field">
          <label>Any</label>
          <input v-model.number="game.year" type="number" class="input" />
        </div>
        <div class="field">
          <label>Descripció</label>
          <textarea v-model="game.description" class="input"></textarea>
        </div>
        <div class="field action-field">
          <button @click="saveGame" class="btn-save">Guardar</button>
          <button @click="goBack" class="btn-cancel">Tornar</button>
        </div>
      </div>
      <div v-else>
        <p>Joc no trobat</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useGamesStore } from '@/stores/games'

const route = useRoute()
const router = useRouter()
const id = parseInt(route.params.id)

// Utilizamos Pinia para el estado compartido
const gamesStore = useGamesStore()
const { games } = storeToRefs(gamesStore)

// Referencia reactiva al juego a editar
const game = gamesStore.games[id]

function saveGame() {
  gamesStore.updateGame(id, {
    title: game.title,
    year: game.year,
    description: game.description
  })
  router.push('/crud')
}

function goBack() {
  router.push('/crud')
}
</script>

<style scoped>
/* Fondo completo de la página */
.edit-page {
  background-image: url('@/assets/inazuma/pg2.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  padding-top: 100px;
  overflow-x: hidden;
}

/* Navbar idéntico a Inaz#0057A8.vue */
.navbar {
  background-color: #0057A8;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 60px;
  align-items: center;
  position: fixed;
  top: 0; left: 0; width: 100%;
  z-index: 1000;
}
.nav-link {
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 0.3rem 0.8rem;
}
.nav-link:hover {
  text-decoration: underline;
}

/* Contenedor de formulario con fondo semitransparente */
.edit-container {
  max-width: 600px;
  margin: 2rem auto;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 12px;
  color: white;
}

.field {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.field label {
  display: block;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input {
  display: block;
  width: 100%;
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  color: #000;
}

.action-field {
  text-align: right;
}

.btn-save {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}

.btn-save:hover {
  background-color: #45A049;
}

.btn-cancel {
  background-color: #F5C542;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.btn-cancel:hover {
  background-color: #e0b530;
}
</style>
