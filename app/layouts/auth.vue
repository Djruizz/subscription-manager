<script setup lang="ts">
const items = [
  { label: "Home", to: "/" },
  { label: "Login", to: "/login" },
  { label: "Register", to: "/register" },
];
</script>
<template>
  <!-- <UHeader>
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
        target="_blank"
      ></UButton>
    </template>
  </UHeader> -->
  
  <UMain
    class="bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 flex justify-center items-center min-h-screen"
  >
    <UPage class="w-full sm:mx-5">
      <UContainer
        class="mt-5 grid lg:grid-cols-2 grid-cols-1 gap-6 bg-slate-800/40 rounded-xl min-h-200"
      >
        <slot></slot>
      </UContainer>
    </UPage>
  </UMain>
</template>
