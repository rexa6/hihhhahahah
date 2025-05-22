<script setup>
import { onMounted } from 'vue'
import { saveUserInfo } from '@/utils/userInfo.js'

onMounted(() => {
  saveUserInfo()
})
</script>

<template>
  <router-view />
</template>
