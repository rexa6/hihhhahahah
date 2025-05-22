<script setup>
import '@/style/index.css'
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
</script>

<template>
    <Header />

  <main>
    <section class="hero">
      <h2>&gt;_Welcome to the void</h2>
      <p>I code in silence. I deploy in shadows.</p>

      <section class="profile" aria-labelledby="identity-heading">
        <div class="profile-container">
          <div class="profile-video">
            <video src="/src/assets/logo.mp4" autoplay loop muted playsinline></video>
          </div>
          <div class="profile-text">
            <h3 id="identity-heading">&gt;_ identity</h3>
            <p>
              Alias: fuckpunch — coder, tinkerer, ghost in the machine.<br />
              I build Python bots (TG/Discord), craft CLI &amp; GUI tools, work with databases, web frameworks, and C++.<br />
              From phishing kits to stealers, from API integrations to Linux/server ops — the stack is deep.<br />
              Code is weapon. Terminal is home. No logs. No traces. Pure logic.
            </p>
          </div>
        </div>
      </section>
    </section>
  </main>

    <Footer />
  
</template>

<style scoped>

</style>
