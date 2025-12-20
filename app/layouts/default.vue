<script setup lang="ts">

const { signOut } = useAuth();
</script>

<template>
  <UPage
    class="h-full bg-linear-to-b from-slate-900 via-slate-900 to-slate-950"
  >
    <div class="grid grid-cols-12 gap-6 p-6 min-h-screen">
      <aside
        class="col-span-12 lg:col-span-2 bg-slate-800 rounded-xl p-4 flex flex-col justify-between"
      >
        <LayoutSideBarNav />
      </aside>

      <!-- MAIN CONTENT -->
      <UMain class="col-span-12 lg:col-span-10 space-y-6">
        <!-- HEADER -->
        <UHeader>
          <template #title>
            <h1 class="text-2xl font-semibold">Panel General</h1>
          </template>

          <template #right>
            <div class="flex items-center gap-3">
              <LayoutHeaderRightButtons/>
            </div>
          </template>
        </UHeader>
        <slot></slot>
      </UMain>
    </div>
  </UPage>
</template>
