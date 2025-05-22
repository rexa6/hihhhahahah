<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginModal from '../ui/LoginModal.vue' 

const showLoginModal = ref(false)
const router = useRouter()

function openModal() {
  showLoginModal.value = true
}

function closeModal() {
  showLoginModal.value = false
}

function handleLogin() {
  closeModal()
  router.push('/admin')
}
</script>

<template>
  <header>
    <div class="header-container">
      <div class="username">
        <h1 @click="openModal" style="cursor: pointer;">fuckpunch</h1>
      </div>

      <nav class="nav-menu">
        <router-link to="/">Home</router-link>
        <router-link to="/aboutme">About Me</router-link>
        <router-link to="/projects">Projects</router-link>
        <a href="https://t.me/fuckpunch">Contact</a>
      </nav>
    </div>
  </header>

  <LoginModal
    v-if="showLoginModal"
    @close="closeModal"
    @login="handleLogin"
  />
</template>


<style scoped>
header {
  background: #111;
  margin-bottom: 40px;
  padding: 25px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  transition: box-shadow 0.3s ease;
}

header:hover {
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.8);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.username h1 {
  margin-left: 15px;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  user-select: none;
}

.nav-menu {
  margin-right: 15px;
}

.nav-menu a {
  color: #fff;
  text-decoration: none;
  margin-left: 25px;
  font-size: 1.125rem;
  font-weight: 500;
  transition: color 0.25s ease-in-out, transform 0.25s ease;
  position: relative;
}

.nav-menu a::after {
  content: '';
  display: block;
  height: 2px;
  background: #aaa;
  width: 0;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -4px;
  left: 0;
}

.nav-menu a:hover {
  color: #ccc;
  transform: translateY(-2px);
}

.nav-menu a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  header {
    padding: 20px;
  }

  .nav-menu a {
    margin-left: 15px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .header-container {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .nav-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .nav-menu a {
    flex: 1 1 45%;
    text-align: center;
    margin: 8px 5px;
    margin-left: 0 !important;
  }
}
</style>