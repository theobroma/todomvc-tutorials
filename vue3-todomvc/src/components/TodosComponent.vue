<script setup lang="ts">
import { ref } from 'vue'

import TodoItem from './TodoItem.vue'

const todos = ref([
  {
    id: crypto.randomUUID(),
    title: 'drink coffee',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'be awesome',
    completed: true,
  },
])
console.log('🚀 ~ todos:', todos)
</script>

<template>
  <main class="main">
    <ul class="todo-list">
      <TodoItem v-for="(todo, index) in todos.value" :key="todo.id" :todo="todo" :index="index" />
    </ul>
  </main>
</template>
