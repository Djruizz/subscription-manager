<script setup lang="ts">
const items = [
  { label: "Home", to: "/" },
  { label: "Login", to: "/login" },
  { label: "Register", to: "/register" },
];
</script>
<template>
  <UHeader>
    <template #title>
      <img
        src="../assets/img/LogoEditableOutlay.png"
        alt="Logo de la app"
        class="h-15"
      />
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UButton
        variant="ghost"
        icon="i-simple-icons-github"
        color="neutral"
        to="https://github.com/Djruizz/subscription-manager"
      ></UButton>
    </template>
  </UHeader>
  <UMain>
    <slot></slot>
  </UMain>
</template>
