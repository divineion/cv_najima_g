
<template>
      <form class="contactForm" @submit=sendEmail>
          <fieldset class="p-4">
              <label for="name">Votre nom</label>
              <input id="name" type="text" placeholder="Saisissez votre nom" v-model="formData.username" required>
              <label for="firstname">Votre prénom</label>
              <input id="firstname" type="text" placeholder="Prénom" v-model="formData.firstname" required>
              <label for="mail">Votre adresse mail</label>
              <input type="email" placeholder="Saisissez votre adresse mail" v-model="formData.email" required>
              <label for="phone">Numéro de téléphone <span>(optionnel)</span></label>
              <input type="tel" placeholder="Saisissez votre numéro">
          </fieldset>
          <fieldset class="p-4">
              <label for="message">Votre message</label>
              <textarea name="message" id="message" cols="30" rows="10" v-model="formData.message" required></textarea>
          </fieldset>
          <input type="submit">
        </form>
</template>

<script>
import axios from 'axios';
const config = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

export default {
    name: 'ContactForm',
  data() {
    return {
      formData: {
        'username' :'',
        'firstname':'',
        'email':'',
        'message':''
      }
    };
  },
  methods: {
    sendEmail(event) {
      event.preventDefault();
      

      // Envoyez les données au fichier index.php
      axios.post('http://localhost:8080/cv_najima_g/portfolio-vue-project/src/index.php', this.formData, config)
           .then(response => {
            // Réponse du serveur (succès ou erreur)
            console.log(response.data)
          
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
} 
  
  </script>
  