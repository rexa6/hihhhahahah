<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="project-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
