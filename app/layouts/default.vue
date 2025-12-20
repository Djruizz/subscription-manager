<script setup lang="ts">
const isCollapsed = ref(false);
const isHover = ref(false);
const isMobileOpen = ref(false);

const dynamicSide = computed(() => isHover.value && isCollapsed.value);
const showNavItems = computed(() => {
  if (!isCollapsed.value) return true;

  return dynamicSide.value;
});
</script>

<template>
  <UPage
    class="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen"
  >
    <div class="flex min-h-screen overflow-clip">
      <div
        :class="[isCollapsed ? 'w-20 ' : 'w-64']"
        class="hidden lg:block m-5 transition-translate duration-300 ease-in-out rounded-xl"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
      >
        <aside
          :class="[
            dynamicSide ? 'w-64 bg-slate-900' : 'w-20 bg-slate-900/75',
            !isCollapsed ? 'w-64 ' : '',
          ]"
          class="hidden lg:flex flex-col border-r border-slate-800 sticky h-[calc(100vh-2.5rem)] z-9999999 top-5 rounded-xl transition-all duration-300 ease-in-out"
        >
          <div
            :class="showNavItems ? 'p-4' : 'justify-center'"
            class="h-20 flex items-center justify-between border-b border-slate-800"
          >
            <NuxtLink to="/dashboard" v-if="!showNavItems">
              <img
                src="../assets/img/IconoLogoOutlay.png"
                alt="Logo de la app"
                class="h-10 mx-auto"
              />
            </NuxtLink>
            <NuxtLink to="/dashboard" v-else>
              <img
                src="../assets/img/LogoOutlay.png"
                alt="Logo de la app"
                class="h-15 mx-auto"
              />
            </NuxtLink>
            <UButton
              v-if="showNavItems"
              color="neutral"
              variant="ghost"
              :icon="isCollapsed ? 'i-lucide-circle' : 'i-lucide-circle-dot'"
              @click="isCollapsed = !isCollapsed"
            />
          </div>

          <div class="flex-1 py-4 overflow-y-auto overflow-x-hidden">
            <LayoutSideBarNav :collapsed="!showNavItems" />
          </div>
        </aside>
      </div>

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
      <!-- MAIN CONTENT -->
      <UMain class="flex-1 min-w-0">
        <UHeader class="m-5 rounded-xl top-5" :toggle="false">
          <template #left>
            <UButton
              icon="i-heroicons-bars-3"
              color="neutral"
              variant="ghost"
              class="lg:hidden mr-4"
              @click="isMobileOpen = true"
            />
            <h1 class="sm:text-2xl font-semibold">Panel General</h1>
          </template>

          <template #right>
            <LayoutHeaderRightButtons />
          </template>
        </UHeader>

        <div class="p-4 md:p-6">
          <slot></slot>
        </div>
        <div class="sticky bottom-5">
          <div class="flex justify-end">
            <UButton icon="i-lucide-plus" size="xl" class="mx-5 rounded-full" />
          </div>
        </div>
      </UMain>
    </div>
  </UPage>
</template>
