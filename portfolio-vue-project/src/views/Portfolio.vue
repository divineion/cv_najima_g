<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const myCarousel = document.querySelector('#portfolioCarousel');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        touch: false
    });
    console.log(myCarousel);

})

/**
 * 
 * carousel HS
 * 
 */

</script>

<template>

<div id="portfolioCarousel" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item d-flex justify-content-center">
      <img src="../assets/images/calculator.png" class="d-block w-100" alt="calc">
    </div>
    <div class="carousel-item">
      <img src="../assets/images/logo-impact.png" class="d-block w-100" alt="pif">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Précédent</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Suivant</span>
  </button>
</div>

</template>

<style scoped>
.carousel-item>img {
    max-width: 75%;
    height: auto;
}


</style>
