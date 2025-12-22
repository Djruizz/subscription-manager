<script setup lang="ts">
const props = defineProps<{
  title:string,
  description: string,
  footerText:string,
  footerLink: string,
}>()
</script>
<template>
  <div class="flex items-center justify-center px-0 py-10 lg:px-4">
    <div
      class="relative w-full max-w-lg bg-slate-800 px-6 sm:px-10 py-8 rounded-xl"
    >
      <!-- Logo -->
      <img
        src="~/assets/img/LogoOutlay.png"
        alt="Logo"
        class="absolute -top-10 left-1/2 -translate-x-1/2 h-20 z-10"
      />

      <!-- Header -->
      <div class="mb-6 text-left">
        <h1 class="text-4xl font-bold mb-2">{{title}}</h1>
        <p class="text-slate-400">{{description}}</p>
      </div>

      <!-- Form -->
       <slot/>

      <!-- Social auth -->
      <div class="flex justify-center gap-4 mt-6">
        <AuthSocialAuthButton provider="google" />
        <AuthSocialAuthButton provider="apple" />
        <AuthSocialAuthButton provider="facebook" />
      </div>

      <!-- Footer -->
      <UButton
        :to="footerLink"
        variant="link"
        class="mt-6 block mx-auto"
        :label="footerText"
      />
    </div>
  </div>
</template>
