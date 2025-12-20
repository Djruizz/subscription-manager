<script setup lang="ts">
import { type NavigationMenuItem } from "@nuxt/ui";
import { type DropdownMenuItem } from "@nuxt/ui";
const props = defineProps<{
  collapsed: boolean;
}>();
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
  <div class="flex flex-col justify-between h-full p-3">
    <UNavigationMenu
      :items="navItems"
      orientation="vertical"
      class=""
      variant="pill"
      :ui="{
        link: collapsed ? 'justify-center' : 'text-md',
        linkLabel: collapsed ? 'hidden' : '',
      }"
    />

    <!-- Bottom actions -->
    <div
      class="space-y-2 text-center flex flex-col justify-center items-center"
    >
      <UButton
        label="Settings"
        class="w-full"
        :class="collapsed ? 'justify-center' : 'text-md'"
        icon="i-lucide-settings"
        size="md"
        color="neutral"
        variant="outline"
        :ui="{
          label: collapsed ? 'hidden' : '',
        }"
      />
      <UDropdownMenu
        class="justify-between cursor-pointer"
        :items="userItems"
        :content="{ align: 'center', side: 'right' }"
        @select="handleDropdownClick"
        arrow
      >
        <UButton
          variant="soft"
          color="neutral"
          class="w-full"
          :trailing-icon="collapsed ? '' : 'i-lucide-chevron-right'"
        >
          <UUser
            :name="collapsed ? '' : 'Dario'"
            :avatar="{
              src: '',
              icon: 'i-lucide-user',
              class: 'border border-emerald-500',
            }"
            :class="collapsed ? 'gap-0' : 'gap-2'"
          />
        </UButton>
      </UDropdownMenu>
    </div>
  </div>
</template>
