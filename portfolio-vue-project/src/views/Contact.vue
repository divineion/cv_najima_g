<template>
    <div id="contact">
        <h2>contact</h2>
        <div class="contact">
            <div class="mail">
                <a href="mailto:najima.guermoudi@gmail.com"><img src="assets/path4466.svg" width="40" height="40"  alt="">najima.guermoudi@gmail.com</a>
            </div>
            <div class="phone">
                <a href="tel:+33635491860"><img src="assets/icon-tel-v.svg" alt="" width="40" height="40">06 35 49 18 60</a>
            </div>
            <div class="network">
                <a href="https://www.linkedin.com/in/n-guer/" target="_blank"><img src="assets/Path_2520.svg" width="40" height="40" alt="">Profil LinkedIn</a>
                <div class="print">
                    <img src="assets/Path_2520.svg" width="40" height="40" alt=""><p>linkedin.com/in/n-guer/</p>
                </div>
            </div>
            <div class="github">
                <a href="https://github.com/divineion" target="_blank"><img src="assets/github-mark.svg" width="40" height="40" alt="silhouette de chat blanc sur fond circulaire coloré" title="logo de Github">Profil Github</a>
                <div class="print">
                    <img src="assets/github-mark.svg" width="40" height="40" alt="silhouette de chat blanc sur fond circulaire coloré"><p>https://github.com/divineion</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    name: 'Contact',
    components: {
        AppHeader, 
        AppFooter
}
}
</script>