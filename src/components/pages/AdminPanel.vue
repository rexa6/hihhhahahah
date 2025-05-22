<script setup>
import '@/style/admin.css'

const users = JSON.parse(localStorage.getItem('users') || '[]')
</script>

<template>
  <div class="admin-container">
    <h1>Админ панель</h1>
    <p>Всего заходов: {{ users.length }}</p>
    <div v-if="users.length === 0" class="no-data">Нет данных о пользователях</div>

    <div class="card-list">
      <div v-for="(user, index) in users" :key="index" class="user-card">
        <div class="card-top">
          <span><strong>IP:</strong> {{ user.ip }}</span>
          <span><strong>Language:</strong> {{ user.language }}</span>
          <span><strong>Timezone:</strong> {{ user.timezone }}</span>
          <span><strong>Screen:</strong> {{ user.screenWidth }}x{{ user.screenHeight }}</span>
        </div>
        <div class="card-middle">
          <strong>User Agent:</strong>
          <div class="ua">{{ user.userAgent }}</div>
        </div>
        <div class="card-bottom">
          <strong>Дата:</strong> {{ new Date(user.date).toLocaleString() }}
        </div>
      </div>
    </div>
  </div>
</template>
