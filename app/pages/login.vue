<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const { signIn, signInWithOAuth } = useAuth();
import { loginSchema, type LoginSchema } from "../../schemas/login.schema";

const state = reactive<LoginSchema>({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  await signIn(state.email, state.password);
};
</script>

<template>
  <!-- Form column -->
  <div class="flex items-center justify-center px-4 py-10 lg:py-0">
    <div
      class="relative w-full max-w-lg bg-slate-800 px-6 sm:px-10 py-8 rounded-xl"
    >
      <!-- Logo -->
      <img
        src="../assets/img/LogoEditableOutlay.png"
        alt="Logo"
        class="absolute -top-10 left-1/2 -translate-x-1/2 h-20 z-10"
      />

      <!-- Header -->
      <div class="mb-6 text-left">
        <h1 class="text-4xl font-bold mb-2">Login</h1>
        <p class="text-slate-400">Please enter your account details</p>
      </div>

      <!-- Form -->
      <UForm
        :schema="loginSchema"
        :state="state"
        @submit="handleSubmit"
        class="grid gap-6"
      >
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

        <!-- Extra actions -->
        <div class="flex justify-between items-center -mt-2">
          <UCheckbox
            label="Keep me logged in"
            indicator="end"
            color="neutral"
            size="md"
          />
          <UButton label="Forgot password" variant="link" color="neutral" />
        </div>

        <!-- Submit -->
        <UButton
          type="submit"
          label="Login"
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
        to="/register"
        variant="link"
        class="mt-6 block mx-auto"
        label="Don’t have an account?"
      />
    </div>
  </div>
  <div class="hidden lg:block"></div>
</template>
