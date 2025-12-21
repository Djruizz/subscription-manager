<script setup lang="ts">

const props = defineProps<{
  collapsed: boolean;
}>();

const { desktopMenu, settingsButton } = useNavigation();



</script>
<template>
  <div class="flex flex-col justify-between h-full p-3">
    <UNavigationMenu
      :items="desktopMenu"
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
        :label="settingsButton.label"
        class="w-full"
        :class="collapsed ? 'justify-center' : 'text-md'"
        :icon="settingsButton.icon"
        size="md"
        color="neutral"
        variant="outline"
        :ui="{
          label: collapsed ? 'hidden' : '',
        }"
      />
      <UiProfileButton :collapsed="collapsed"/>
    </div>
  </div>
</template>
