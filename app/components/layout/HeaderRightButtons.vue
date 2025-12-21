<script setup lang="ts"></script>
<template>
  <UInput
    name="search"
    placeholder="Search"
    icon="i-lucide-search"
    variant="outline"
  />
  <UButton icon="i-lucide-bell" variant="ghost" color="neutral"></UButton>
  <UButton
    label="Add subscription"
    class="hidden md:flex"
    icon="i-lucide-plus"
    size="lg"
  />
  <UiProfileButton collapsed class="md:hidden"/>

</template>
