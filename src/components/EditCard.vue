<template>
  <div class="edit-card">
    <input v-model="game.title" class="input" />
    <input v-model.number="game.year" type="number" class="input" />
    <textarea v-model="game.description" class="input"></textarea>
    <button @click="$emit('close')">Guardar</button>
  </div>
</template>

<script setup>
defineProps({
  game: Object
})
</script>

<style scoped>
.edit-card .input {
  display: block;
  width: 100%;
  margin: 0.3rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
}
</style>
    