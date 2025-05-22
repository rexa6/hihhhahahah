<script setup>
import { defineEmits, ref } from 'vue'
import { useRouter } from 'vue-router'
import { isLoggedIn } from '@/utils/auth.js'

const emit = defineEmits(['close'])
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')

function handleSubmit() {
  if (username.value === 'admin' && password.value === '1234') {
    isLoggedIn.value = true
    emit('close')
    router.push('/admin')
  } else {
    error.value = 'Invalid login or password'
  }
}
</script>


<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal">
      <form @submit.prevent="handleSubmit" class="login-form">
        <input
          v-model="username"
          type="text"
          placeholder="LOGIN"
          required
          autocomplete="username"
        />
        <input
          v-model="password"
          type="password"
          placeholder="PASSWORD"
          required
          autocomplete="current-password"
        />
        <button type="submit">LOGIN</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
      <button class="close-btn" @click="$emit('close')">Exit</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #111;
  padding: 30px;
  border-radius: 10px;
  width: 320px;
  max-width: 90%;
  color: #eee;
  box-shadow: 0 8px 25px rgba(0,0,0,0.8);
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.login-form input {
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
}

.login-form button {
  background-color: #555;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #777;
}

.error {
  color: #f33;
  font-size: 0.9rem;
}

.close-btn {
  margin-top: 20px;
  background: transparent;
  border: 1px solid #888;
  padding: 6px 15px;
  border-radius: 6px;
  color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-btn:hover {
  background-color: #444;
  color: #fff;
}

@media (max-width: 480px) {
  .modal {
    width: 90%;
  }
}
</style>
