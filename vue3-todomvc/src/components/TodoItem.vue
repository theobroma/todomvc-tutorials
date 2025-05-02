<script setup lang="ts">
const props = defineProps(['todo', 'index'])
console.log('🚀 ~ props:', props)
</script>

<template>
  <li>
    <div class="view">
      <input type="checkbox" class="toggle" />
      <label>{{ todo.title }}</label>
      <button class="destroy"></button>
    </div>
  </li>
</template>
