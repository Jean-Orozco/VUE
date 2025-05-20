<template>
  <div class="api-page">
    <!-- Navbar copiada de InazumaView.vue -->
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/api" class="nav-link">Dades API</router-link>
      <router-link to="/crud" class="nav-link">Inazuma Eleven</router-link>
    </nav>

    <div class="content">
      <h1>Dades API</h1>
      <button @click="loadPosts">Carregar posts</button>
      <div v-if="loading">Carregant...</div>
      <ul v-else class="post-list">
        <li v-for="post in posts" :key="post.id" class="post-item">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts   = ref([])
const loading = ref(false)

async function loadPosts() {
  loading.value = true
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Navbar (idéntico al de InazumaView.vue) */
.navbar {
  background-color: #29F4E3;
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
  color: #011956;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 0.3rem 0.8rem;
}
.nav-link:hover {
  text-decoration: underline;
}

/* Contenedor principal con imagen de fondo fija */
.api-page {
  padding-top: 80px; /* deja espacio para la navbar */
  min-height: 100vh;
  background-image: url('@/assets/inazuma/pg4.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; /* evita que se mueva al hacer scroll */
}

/* Título en blanco */
.api-page h1 {
  color: #fff;
  margin-bottom: 1rem;
}

/* Contenido */
.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  color: #000;
}

/* Botón */
button {
  background: #0080C0;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #006a9c;
}

/* Lista de posts */
.post-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

/* Ítems de post */
.post-item {
  background: #fff;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  color: #000;
}
.post-item h3 {
  margin: 0 0 0.5rem;
}
.post-item p {
  margin: 0;
}
</style>
