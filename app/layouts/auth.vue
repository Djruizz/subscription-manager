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
    class="min-h-screen bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 flex items-center justify-center"
  >
    <UPage class="w-full px-4 sm:px-6">
      <UContainer
        class="mx-auto bg-slate-800/40 rounded-xl overflow-hidden p-20"
      >
        <div class="grid lg:grid-cols-2">
          <slot />
        </div>
      </UContainer>
    </UPage>
  </UMain>
</template>
