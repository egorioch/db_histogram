<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <span v-if="isLoggedIn"></span>
    </div>

    <router-view />
        
</template>