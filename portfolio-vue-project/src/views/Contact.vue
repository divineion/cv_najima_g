<script setup>
import ContactForm from '../components/ContactForm.vue';
import AppHeader from '../components/AppHeader.vue';

</script>

<template>
<main>
<ContactForm/>
</main>


</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


