<script setup lang="ts">
const isCollapsed = ref(false);
const isMobileOpen = ref(false);
</script>

<template>
  <UPage
    class="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen"
  >
    <div class="flex min-h-screen overflow-hidden lg:overflow-visible">
      <!-- <aside
        class="col-span-12 lg:col-span-2 bg-slate-800 rounded-xl p-4 flex flex-col justify-between"
      >
        
      </aside> -->
      <aside
        class="hidden lg:flex flex-col border-r border-slate-800 bg-slate-900 sticky h-[calc(100vh-2.5rem)] top-5 m-5 transition-translate duration-300 ease-in-out rounded-xl"
        :class="[isCollapsed ? 'w-20 ' : 'w-64']"
      >
        <div
          class="h-20 flex items-center justify-center border-b border-slate-800"
        >
          <NuxtLink to="/dashboard" v-if="isCollapsed">
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
        </div>

        <div class="flex-1 py-4 overflow-y-auto overflow-x-hidden">
          <LayoutSideBarNav :collapsed="isCollapsed" />
        </div>

        <div class="p-4 border-t border-slate-800 flex justify-center">
          <UButton
            color="neutral"
            variant="ghost"
            :icon="
              isCollapsed
                ? 'i-heroicons-chevron-double-right-20-solid'
                : 'i-heroicons-chevron-double-left-20-solid'
            "
            @click="isCollapsed = !isCollapsed"
          />
        </div>
      </aside>

      <USlideover
        v-model:open="isMobileOpen"
        side="left"
        class="w-64 bg-slate-900 max-h-screen"
        :overlay="false"
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
        <UHeader class="m-5 rounded-xl top-5">
          <template #left>
            <UButton
              icon="i-heroicons-bars-3"
              color="neutral"
              variant="ghost"
              class="lg:hidden mr-4"
              @click="isMobileOpen = true"
            />
            <h1 class="text-2xl font-semibold">Panel General</h1>
          </template>
          <template #right>
            <LayoutHeaderRightButtons />
          </template>
        </UHeader>

        <div class="p-4 md:p-6">
          <slot></slot>
        </div>
      </UMain>
    </div>
  </UPage>
</template>
