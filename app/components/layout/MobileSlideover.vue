<script>
const isMobileOpen = ref(false);
</script>
<template>
  <!-- Activate slideover button -->
  <UButton
    icon="i-heroicons-bars-3"
    color="neutral"
    variant="ghost"
    class="lg:hidden mr-4"
    @click="isMobileOpen = true"
  />
  <!--  Slideover  -->
  <USlideover
    v-model:open="isMobileOpen"
    side="left"
    class="w-64 bg-slate-900 max-h-screen"
    :ui="{
      header: 'p-4',
      body: 'p-0 pt-2 ',
    }"
  >
    <template #title>
      <NuxtLink to="/dashboard">
        <img
          src="../assets/img/LogoOutlay.png"
          alt="Logo de la app"
          class="h-15 mx-auto"
        />
      </NuxtLink>
    </template>
    <template #body>
      <LayoutSideBarNav :collapsed="false" />
    </template>
  </USlideover>
</template>
