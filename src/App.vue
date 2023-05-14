<script setup>
import AppBody from './components/AppBody.vue';
import AppHeader from './components/AppHeader.vue'

</script>

<template>
  <header>
    <AppHeader/>  
  </header>

  <main>
    <AppBody/>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: #27272e;
}
</style>
