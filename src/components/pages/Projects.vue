<script setup>
import '@/style/projects.css'
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import Card from '../ui/Card.vue'
</script>

<template>
  <Header />
  <main>
    <div class="projects-container">
      <h2>&gt;_ Featured Projects</h2>
      <div class="project-grid">
        <Card title="🤖 Garant Bot" description="Secure Telegram bot with payment automation, status handling, and dispute logic." />
        <Card title="🎰 Crypto Casino Bot" description="Custom Telegram casino with on-chain crypto integration and fairness logic." />
        <Card title="📡 Drainer Site Builder" description="Fast and stealthy drainer/landing generator with wallet connect integration." />
        <Card title="📬 Advanced Spammer" description="Multithreaded spam bot with scheduling, proxy rotation, and content randomizer." />
        <Card title="📈 AutoShop Engine" description="Telegram-based shop bot with stock tracking, payments, and dynamic delivery logic." />
        <Card title="📥 Parser / Inviter" description="Channel/group parser with targeted inviting, anti-ban delay system, and filtering." />
        <Card title="🤖 AI Bot" description="ChatGPT-powered Telegram/Discord bot for support, roleplay, automation, and custom logic workflows." />
        <Card title="💵 Crypto Invoicing Tool" description="Generates crypto invoices (BTC, ETH, TON), includes QR codes, payment tracking, and webhook integration." />
        <Card title="🗃 Encrypted File Manager" description="Password-protected file system with AES-256 encryption, drag-n-drop UI, and access logging." />
        <Card title="🎭 Spoofer Tool" description="MAC, IP, and User-Agent spoofing with randomized presets and quick switch interface." />
        <Card title="🧬 Stealer (Cookies, Sessions, Telegram)" description="Extracts browser sessions (Chrome/Brave), Telegram/Discord tokens, auto-upload via API." />
        <Card title="🧾 Receipt Generator" description="Generates fake receipts/screenshots with custom fonts, logos, and UI for maximum realism." />
        <Card title="🔒 Secure VPN Manager" description="Custom VPN client/server with automated connection switching and encrypted traffic routing." />
        <Card title="📊 Real-time Analytics Dashboard" description="Interactive dashboard for monitoring server performance, user stats, and custom event tracking." />
        <Card title="🧩 Modular Bot Framework" description="Flexible multi-platform bot architecture supporting plugins, easy extensions, and custom commands." />
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
</style>
