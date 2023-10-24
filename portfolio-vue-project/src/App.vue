<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue';

</script>

<template>
  <header>
    <img alt="logo" class="logo" src="./assets/images/android-chrome-512x512.png" width="125" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Parcours">Parcours</RouterLink>
        <RouterLink to="/Skills">Compétences</RouterLink>
        <RouterLink to="/Portfolio">Portfolio</RouterLink>
        <RouterLink to="/Contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  
  <main>
    <RouterView />
  </main>

<footer>
  <AppFooter/>
</footer>
</template>