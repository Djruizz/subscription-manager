<script setup lang="ts">
const {signOut} = useAuth();

</script>

<template>
    <h1 class="bg-emerald-500">Index</h1>
    <button @click="signOut">logout</button>
</template>