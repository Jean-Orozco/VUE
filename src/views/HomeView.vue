<template>
  <div class="landing-container">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/api" class="nav-link">Dades API</router-link>
      <router-link to="/crud" class="nav-link">Inazuma Eleven</router-link>
    </nav>

    <main class="landing">
      <div class="overlay-box">
        <h1 class="title">Projecte VUE ASIX</h1>
        <p class="author">Fet per Jean Pierre</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.landing-container {
  position: fixed;
  inset: 0;
  background-image: url('@/assets/inazuma/wallpaper.jpg_large');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.navbar {
  background-color: #2c3e50;
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
  color:  white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 0.3rem 0.8rem;
}

.nav-link:hover {
  text-decoration: underline;
  background-color: transparent; /* sin cuadro al pasar el cursor */
}

.landing {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 100px;
  text-align: center;
}

.overlay-box {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 6rem 4rem;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  max-width: 900px;
  width: 90%;
}

.title {
  font-size: 6rem;
  font-weight: bold;
  color: #ffea00;
  text-shadow:
    0 0 8px rgba(255, 234, 0, 0.8),
    0 0 16px rgba(255, 234, 0, 0.6),
    0 0 24px rgba(255, 234, 0, 0.4);
}

.author {
  margin-top: 1.5rem;
  font-size: 2.5rem;
  color: #08e0c3f1;                   
  font-weight: bold;
  -webkit-text-stroke: 1px #003300; 
  text-shadow:
    0 0 8px rgba(19, 139, 194, 0.8),
    0 0 16px rgba(6, 140, 163, 0.6),
    0 0 24px rgba(7, 158, 179, 0.521);
}

@media (max-width: 768px) {
  .overlay-box {
    padding: 4rem 2rem;
  }
  .title {
    font-size: 4rem;
    text-shadow:
      0 0 6px rgba(255, 234, 0, 0.8),
      0 0 12px rgba(255, 234, 0, 0.6);
  }
  .author {
    font-size: 1.8rem;
    text-shadow:
      0 0 6px rgba(11, 185, 171, 0.8),
      0 0 12px rgba(5, 153, 163, 0.6);
  }
}
</style>