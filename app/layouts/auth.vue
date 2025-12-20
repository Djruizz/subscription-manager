<template>
  <UMain
    class="min-h-screen bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 flex items-center justify-center"
  >
    <UPage class="w-full px-4 sm:px-6">
      <UContainer
        class="mx-auto bg-slate-800/40 rounded-xl overflow-hidden p-20"
      >
        <div class="grid lg:grid-cols-2">
          <slot />
        </div>
      </UContainer>
    </UPage>
  </UMain>
</template>
