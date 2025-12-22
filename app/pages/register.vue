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

const handleSubmit = async () =>
  await signUp(state.email, state.password, state.full_name);
</script>
<template>
  <!-- Left cell, hidden on mobiles -->
  <div class="hidden lg:block"></div>

  <!-- Form column -->
  <AuthCard
    title="Register"
    description="Please enter your details"
    footer-link="/login"
    footer-text="Already have an account?"
  >
    <UForm
      :schema="registerSchema"
      :state="state"
      @submit="handleSubmit"
      class="grid gap-6"
    >
      <UFormField label="Name" name="name">
        <UInput
          v-model="state.full_name"
          type="text"
          placeholder="Your full name"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Email" name="email">
        <UInput
          v-model="state.email"
          type="email"
          placeholder="mail@example.com"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput
          v-model="state.password"
          type="password"
          placeholder="********"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Confirm Password" name="confirmPassword">
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
  </AuthCard>
</template>
