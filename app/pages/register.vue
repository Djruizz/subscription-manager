<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const { signUp } = useAuth();
import {
  registerSchema,
  type RegisterSchema,
} from "../../schemas/register.schema";

const state = reactive<RegisterSchema>({
  full_name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const handleSubmit = async () => {
  await signUp(state.email, state.password, state.full_name);
};
</script>
<template>
  <!-- Left cell, hidden on mobiles -->
  <div class="hidden lg:block"></div>

  <!-- Form column -->
  <div class="flex items-center justify-center px-4 py-10 lg:py-0">
    <div
      class="relative w-full max-w-lg bg-slate-800 px-6 sm:px-10 py-8 rounded-xl"
    >
      <!-- Logo -->
      <img
        src="../assets/img/LogoOutlay.png"
        alt="Logo"
        class="absolute -top-10 left-1/2 -translate-x-1/2 h-20 z-10"
      />

      <!-- Header -->
      <div class="mb-6 text-left">
        <h1 class="text-4xl font-bold mb-2">Register</h1>
        <p class="text-slate-400">Please enter your account details</p>
      </div>

      <!-- Form -->
      <UForm
        :schema="registerSchema"
        :state="state"
        @submit="handleSubmit"
        class="grid gap-6"
      >
        <UFormField label="Name" name="name" class="relative">
          <UInput
            v-model="state.full_name"
            type="text"
            placeholder="Your full name"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Email" name="email" class="relative">
          <UInput
            v-model="state.email"
            type="email"
            placeholder="mail@example.com"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Password" name="password" class="relative">
          <UInput
            v-model="state.password"
            type="password"
            placeholder="********"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Confirm Password"
          name="confirmPassword"
          class="relative"
        >
          <UInput
            v-model="state.confirmPassword"
            type="password"
            placeholder="********"
            class="w-full"
          />
        </UFormField>

        <!-- Submit -->
        <UButton
          type="submit"
          label="Create account"
          loading-auto
          class="mx-auto w-2/3 justify-center text-center"
        />
      </UForm>

      <!-- Social auth -->
      <div class="flex justify-center gap-4 mt-6">
        <UiSocialAuthButton provider="google" />
        <UiSocialAuthButton provider="apple" />
        <UiSocialAuthButton provider="facebook" />
      </div>

      <!-- Footer -->
      <UButton
        to="/login"
        variant="link"
        class="mt-6 block mx-auto"
        label="Already have an account?"
      />
    </div>
  </div>
</template>
