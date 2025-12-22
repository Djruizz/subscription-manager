<template>
  <UMain
    class="min-h-screen bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 flex items-center justify-center"
  >
    <UContainer
      class="m-2 md:m-5 lg:mx-20 bg-slate-800/40 rounded-xl overflow-hidden md:py-15 w-full p-4 sm:px-6"
    >
      <div class="grid lg:grid-cols-2">
        <slot />
      </div>
    </UContainer>
  </UMain>
</template>
