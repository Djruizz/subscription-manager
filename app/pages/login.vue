<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
import { loginSchema, type LoginSchema } from "@@/schemas/login.schema";
const { signIn } = useAuth();

const state = reactive<LoginSchema>({
  email: "",
  password: "",
});

const handleSubmit = async () => await signIn(state.email, state.password);
</script>

<template>
  <!-- Form column -->
  <AuthCard
    title="Login"
    description="Please enter your account details"
    footer-link="/register"
    footer-text="Don't have an account?"
  >
    <UForm
      :schema="loginSchema"
      :state="state"
      @submit="handleSubmit"
      class="grid gap-6"
    >
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

      <!-- Extra actions -->
      <div class="sm:flex justify-between items-center -mt-2 p-1">
        <UCheckbox
          label="Keep me logged in"
          
          color="neutral"
          size="md"
          class=""
        />
        <UButton label="Forgot password" variant="link" color="neutral" class="px-0"/>
      </div>

      <!-- Submit -->
      <UButton
        type="submit"
        label="Login"
        loading-auto
        class="mx-auto w-2/3 justify-center text-center"
      />
    </UForm>
  </AuthCard>
  <!-- IMG -->
  <div class="hidden lg:block"></div>
</template>
