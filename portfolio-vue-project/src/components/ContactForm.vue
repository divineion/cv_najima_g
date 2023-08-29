<template>
    <form action="" method="post">
        <fieldset>
            <label for="name">Votre nom</label>
            <input id="name" type="text" placeholder="Saisissez votre nom">
            <label for="firstname">Votre prénom</label>
            <input id="firstname" type="text" placeholder="Prénom">
            <label for="mail">Votre adresse mail</label>
            <input type="email" placeholder="Saisissez votre adresse mail">
        </fieldset>
        <fieldset>
            <label for="message">Votre message</label>
            <textarea name="message" id="message" cols="30" rows="20"></textarea>
        </fieldset>
      </form>
</template>

<script>
export default {
    name: 'ContactForm'
}
</script>