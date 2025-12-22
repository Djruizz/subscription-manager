<script setup lang="ts">
import labelLogo from "~/assets/img/LogoOutlay.png";
import Logo from "~/assets/img/IconoLogoOutlay.png";

const { showNavItems, isCollapsed, isHover, dynamicSide } = useSidebar();
</script>
<template>
  <div
    :class="[isCollapsed ? 'w-20 ' : 'w-64']"
    class="hidden md:block mr-5 transition-translate duration-300 ease-in-out rounded-xl"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <aside
      :class="[
        dynamicSide ? 'w-64 bg-slate-900' : 'w-20 bg-slate-900/75',
        !isCollapsed ? 'w-64 ' : '',
      ]"
      class="m-5 hidden md:flex flex-col border-r border-slate-800 sticky h-[calc(100vh-2.5rem)] z-9999999 top-5 rounded-xl transition-all duration-300 ease-in-out"
    >
      <div
        :class="showNavItems ? 'p-4' : 'justify-center'"
        class="h-20 flex items-center justify-between border-b border-slate-800"
      >
        <NuxtLink to="/dashboard">
          <img
            :src="showNavItems ? labelLogo : Logo"
            alt="App Logo"
            class="mx-auto"
            :class="showNavItems ? 'h-15' : 'h-10'"
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
        <NavbarSideBarNav :collapsed="!showNavItems" />
      </div>
    </aside>
  </div>
</template>
