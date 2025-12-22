<script setup lang="ts">
import { type DropdownMenuItem } from "@nuxt/ui";
const {email, shortName, getProfileData} = useUser()
const props = defineProps<{
  collapsed: boolean;
}>();

onMounted(()=>getProfileData())
const { signOut } = useAuth();

const userItems = ref<DropdownMenuItem[]>([
  [{ label: email, icon: "i-lucide-user", type: "label" }],
  [
    { label: "Account settings", icon: "i-lucide-settings", value: "settings" },
    {
      label: "Log Out",
      icon: "i-lucide-log-out",
      color: "error",
      onSelect() {
        signOut();
      },
    },
  ],
]);
</script>
<template>
  <UDropdownMenu
    class="justify-between cursor-pointer"
    :class="collapsed? 'justify-center': '' "
    :items="userItems"
    :content="collapsed? { align: 'end', side: 'top' }:{ align: 'center', side: 'right' }"
    arrow
  >
    <UButton
      variant="soft"
      color="neutral"
      :class="collapsed? '': 'w-full'"
      :trailing-icon="collapsed ? undefined : 'i-lucide-chevron-right'"
    >
      <UUser
        :name="collapsed ? '' : shortName"
        :avatar="{
          src: '',
          icon: 'i-lucide-user',
          class: 'border border-emerald-500',
        }"
        :class="collapsed ? 'gap-0' : 'gap-2'"
      />
    </UButton>
  </UDropdownMenu>
</template>
