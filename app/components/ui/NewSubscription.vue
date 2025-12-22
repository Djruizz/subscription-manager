<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    isIconOnly?:boolean;
  }>(),
  {
    size: "md",
    isIconOnly:false,
  }
);
</script>
<template>
  <UButton
    variant="solid"
    :size="size"
    color="primary"
    icon="i-lucide-plus"
    :class="[isIconOnly ? 'rounded-full aspect-square p-3' : 'rounded-md']"
  >
    <template #default>
      <span v-if="!isIconOnly"> Add subscription </span>
    </template>
  </UButton>
</template>
