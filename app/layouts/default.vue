<script setup lang="ts">
const route = useRoute();
const pageTitle = computed((): string => {
  return (route.meta.title as string) || "Outlay";
});
</script>

<template>
  <UPage
    class="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen"
  >
    <div class="flex min-h-screen overflow-clip">
      <NavbarSideBarLayout />

      <!-- MAIN CONTENT -->
      <UMain class="flex-1 min-w-0">
        <UHeader
          class="m-5 rounded-xl top-5"
          :toggle="false"
          :title="pageTitle"
          :ui="{
            container: 'gap-0',
          }"
        >
          <template #right>
            <SearchButton />
            <UButton
              icon="i-lucide-bell"
              variant="ghost"
              color="neutral"
            ></UButton>
            <SubscriptionsAddButton class="hidden md:flex"/>
            <AuthProfileButton collapsed class="md:hidden" />
          </template>
        </UHeader>

        <div class="p-4 md:p-6">
          <slot></slot>
        </div>
      </UMain>
      <div class="fixed bottom-25 right-10 z-60 md:hidden">
        <SubscriptionsAddButton size="xl" :isIconOnly="true" />
      </div>
      <NavbarBottomNav class="md:hidden" />
    </div>
    <SubscriptionsFormModal />
  </UPage>
</template>
