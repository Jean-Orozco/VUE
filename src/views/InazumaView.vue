<template>
  <div class="inazuma">
    <!-- Navbar -->
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/api" class="nav-link">Dades API</router-link>
      <router-link to="/crud" class="nav-link">Inazuma Eleven</router-link>
    </nav>

    <div class="content">
      <img src="@/assets/inazuma/tit1.png" alt="Inazuma Eleven" class="title-image" />

      <div class="cards">
        <template v-for="(game, index) in games" :key="game.title">
          <div
            :class="['card', (index === 6 || index === 7) ? 'centered-card' : '']"
            @click="$router.push(`/crud/${index}`)"
          >
            <img :src="game.image" :alt="game.title" />
            <EditCard v-if="editingIndex === index" :game="game" @close.stop="stopEditing" />
            <div v-else>
              <h3>{{ game.title }}</h3>
              <p>{{ game.description }}</p>
              <span class="year">{{ game.year }}</span>
            </div>
          </div>

          <div v-if="index === 2" class="banner">
            <img src="@/assets/inazuma/tit2.webp" alt="Banner GO" />
          </div>
          <div v-else-if="index === 5" class="banner large">
            <img src="@/assets/inazuma/tit3.png" alt="Banner Chrono Stones" />
          </div>
          <div v-else-if="index === 6" class="banner">
            <img src="@/assets/inazuma/inazumaares.webp" alt="Banner Ares" />
          </div>
        </template>
      </div>

      <div class="victory-road">
        <img src="@/assets/inazuma/vr.webp" alt="Victory Road" class="victory-full" />
        <div class="victory-text">
          <h2>⚽ Nou joc: Inazuma Eleven - Victory Road</h2>
          <p>
            Previsto para 2024-2025, "Victory Road" marcarà el retorn de la saga amb gràfics renovats i nous personatges,
            combinant les històries d'Ares i nous arcs. Estarà disponible per a Nintendo Switch, PS4/PS5 i PC.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGamesStore } from '@/stores/games'
import { storeToRefs } from 'pinia'
import EditCard from '@/components/EditCard.vue'

// Accedemos al store de Pinia
const gamesStore = useGamesStore()
const { games } = storeToRefs(gamesStore)

// Control de edición de tarjetas
const editingIndex = ref(null)
function startEditing(index) {
  editingIndex.value = index
}
function stopEditing() {
  editingIndex.value = null
}
</script>

<style scoped>
.inazuma {
  background-image: url('@/assets/inazuma/pg1.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  padding-top: 100px;
  overflow-x: hidden;
}

.navbar {
  background-color: #F5C542;
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
  color: #0080C0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 0.3rem 0.8rem;
}

.nav-link:hover {
  text-decoration: underline;
  background-color: transparent;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
  color: #fff;
}

.title-image {
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;
  display: block;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;
  padding: 0 2rem;
}
@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

.card {
  background: rgba(46, 90, 61, 0.9);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(226, 2, 2, 0.3);
  transition: transform 0.2s;
  text-align: center;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.03);
}
.card img {
  width: 100%;
  border-radius: 8px;
}
.card h3 {
  margin-top: 1rem;
  color: #F5C542;
}
.card .year {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #ccc;
}

.centered-card {
  grid-column: span 3;
  max-width: 400px;
  margin: 2rem auto;
}

.banner {
  grid-column: span 3;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.large img {
  max-width: 1000px;
}
.banner img {
  width: 100%;
  border-radius: 10px;
}

.victory-road {
  background: #A0522D;
  border-radius: 10px;
  margin: 3rem 2rem 2rem;
  overflow: hidden;
  text-align: center;
  color: #fff;
  transition: transform 0.2s;
}
.victory-road:hover {
  transform: scale(1.03);
}
.victory-full {
  width: 100%;
  display: block;
}
.victory-text {
  padding: 1.5rem 2rem;
}
</style>
