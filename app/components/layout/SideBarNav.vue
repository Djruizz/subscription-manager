<script setup lang="ts">
import { type NavigationMenuItem } from "@nuxt/ui";
import { type DropdownMenuItem } from "@nuxt/ui";

const { signOut } = useAuth();
const user = useSupabaseUser();

const userName = computed(() => user.value?.email ?? "Cargando...");

const navItems = ref<NavigationMenuItem[]>([
  { label: "Dashboard", to: "/dashboard", icon: "i-lucide-house" },
  { label: "My Subscriptions", to: "/", icon: "i-lucide-dollar-sign" },
  { label: "Calendar", to: "/", icon: "i-lucide-calendar" },
  { label: "Analytics", to: "/", icon: "i-lucide-chart-line" },
]);
const userItems = ref<DropdownMenuItem[]>([
  [{ label: userName, icon: "i-lucide-user", type: "label" }],
  [
    { label: "Accout settings", icon: "i-lucide-settings", value: "settings" },
    {
      label: "Log Out",
      icon: "i-lucide-log-out",
      color: "error",
      onSelect(e: Event) {
        signOut();
      },
    },
  ],
]);

const handleDropdownClick = async (value: string) => {
  console.log(value);
  if (value === "logout") {
    await signOut();
  }
};
</script>
<template>
  <div>
    <!-- Logo -->
    <NuxtLink to="/dashboard">
      <div class="py-6 bg-slate-900 rounded-lg">
        <img
          src="../../assets/img/LogoOutlay.png"
          alt="Logo de la app"
          class="h-20 mx-auto"
        />
      </div>
    </NuxtLink>

    <!-- Navigation -->

    <UNavigationMenu
      :items="navItems"
      orientation="vertical"
      class="py-6"
      variant="pill"
      :ui="{
        link: 'text-md',
      }"
    />
  </div>

  <!-- Bottom actions -->
  <div class="space-y-2">
    <UButton
      label="Settings"
      class="w-full"
      icon="i-lucide-settings"
      size="lg"
      color="neutral"
      variant="outline"
    />
    <UDropdownMenu
      class="w-full justify-between cursor-pointer"
      :items="userItems"
      :content="{ align: 'center', side: 'top' }"
      @select="handleDropdownClick"
    >
      <UButton
        variant="soft"
        color="neutral"
        trailing-icon="i-lucide-chevron-up"
      >
        <UUser
          name="Dario"
          :avatar="{
            src: '',
            icon: 'i-lucide-user',
            class: 'border border-emerald-500',
          }"
        />
      </UButton>
    </UDropdownMenu>
  </div>
</template>
