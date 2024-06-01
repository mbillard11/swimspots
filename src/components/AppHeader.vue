<script setup lang="ts">
import NavBar from './NavBar.vue';
import Button from 'primevue/button';
</script>

<template>
    <div class="authentication-buttons">
        <Button class="signup-button" label="Signup" raised />
        <Button class="login-button" label="Login" severity="info" raised />
    </div>
</template>

<style>
.authentication-buttons {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
}

Button {
    margin-inline: var(--inline-spacing);
}

</style>