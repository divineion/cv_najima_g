<template>
    <div class="header-top-left">
        <h1>Najima <span>Développement Full-stack</span></h1>
    </div>
    <div class="header-right presentation">
        <img class="header-left" src="assets/photo_naj.webp" width="490" height="653" alt="">
        <p>Après 15 années de polyvalence administrative et commerciale, je m'oriente vers le développement web.</p>
        <div>
            <p class="animation">En formation depuis avril, je recherche un stage non rémunéré pour la période du 6 novembre au 22 décembre 2023.</p>
            <button class="print-button" onclick="print('body');">Imprimer</button>
        </div>
    </div>
</template>

<style>
</style>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    name: 'Presentation',
    components: AppHeader, AppFooter
}
</script>