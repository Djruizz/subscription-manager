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
  <div class="flex flex-col justify-center items-center">
    <div
      class="flex flex-col justify-around items-start bg-slate-800 h-4/5 w-full max-w-md px-6 xs:px-10 rounded-xl relative"
    >
      <img
        src="../assets/img/LogoEditableOutlay.png"
        alt="Logo de la app"
        class="absolute -top-10 left-1/2 -translate-x-1/2 h-20 z-50"
      />
      <div>
        <h1 class="text-4xl font-bold mb-2">Login</h1>
        <p>Please enter your account details</p>
      </div>
      <div class="w-full min-w-0 text-center">
        <UForm
          class="grid gap-4 xs:w-full min-w-0"
          :state="state"
          :schema="loginSchema"
          @submit="handleSubmit"
        >
          <UFormField label="Email" name="email" class="w-full min-w-0">
            <UInput
              name="email"
              type="email"
              placeholder="mail@example.com"
              v-model="state.email"
              class="w-full min-w-0"
            />
          </UFormField>
          <UFormField label="Password" name="password" class="w-full min-w-0">
            <UInput
              name="password"
              type="password"
              placeholder="********"
              v-model="state.password"
              class="w-full min-w-0"
            />
          </UFormField>
          <div class="flex justify-between items-center -mt-3">
            <UCheckbox
              label="Keep me logged in"
              class="px-1"
              indicator="end"
              color="neutral"
              size="md"
            ></UCheckbox>
            <UButton
              label="Forgot password"
              variant="link"
              color="neutral"
            ></UButton>
          </div>
          <UButton
            class="mt-1 mx-auto px-30 py-2"
            label="Submit"
            loading-auto
            type="submit"
            variant="subtle"
            block
          ></UButton>
          <div class="flex w-full gap-4 justify-center">
            <!-- 
            Boton para moviles
            <UButton color="neutral" variant="outline" class="rounded-full" size="xl">
              <IconsIconGoogle/>
              Continuar con google
            </UButton> 
            -->
            <UiSocialAuthButton provider="google" @click="signInWithOAuth" />
            <UiSocialAuthButton provider="apple" @click="signInWithOAuth" />
            <UiSocialAuthButton provider="facebook" @click="signInWithOAuth" />
          </div>
        </UForm>
        <UButton
          label="Register"
          variant="link"
          class="pt-5"
          to="/register"
        ></UButton>
      </div>
    </div>
  </div>
</template>
