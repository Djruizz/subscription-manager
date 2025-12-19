<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const {signUp, signInWithOAuth} = useAuth()
import {registerSchema, type RegisterSchema} from '../../schemas/register.schema';

const state = reactive<RegisterSchema>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})


const handleSubmit = (async()=>{
  await signUp(state.email, state.password)
})
</script>
<template>
  <div class="hidden lg:block"></div>
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
        <h1 class="text-4xl font-bold mb-2">Register</h1>
        <p>Please enter your account details</p>
      </div>

      <div class="w-full min-w-0 text-center">
        <UForm class="grid gap-4 xs:w-full min-w-0" @submit="handleSubmit" :schema="registerSchema" :state="state">
          <UFormField label="Name" name="name" class="w-full min-w-0">
            <UInput
              name="name"
              type="text"
              placeholder="Your Name"
              v-model="state.name"
              class="w-full min-w-px"
              size="md"
            />
          </UFormField>

          <UFormField label="Email" name="email"class="w-full min-w-0">
            <UInput
              name="email"
              type="email"
              placeholder="mail@example.com"
              v-model="state.email"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField label="Password" name="password"class="w-full min-w-0">
            <UInput
              name="password"
              type="password"
              placeholder="********"
              v-model="state.password"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField label="Confirm Password" name="confirmPassword" class="w-full min-w-0">
            <UInput
              name="confirmPass"
              type="password"
              placeholder="********"
              v-model="state.confirmPassword"
              class="w-full min-w-0"
            />
          </UFormField>

          <UButton
            class="mt-1 mx-auto px-30 py-2"
            label="Submit"
            loading-auto
            type="submit"
            variant="subtle"
          />

          <div class="flex w-full gap-4 justify-center">
            <UiSocialAuthButton provider="google" @click="signInWithOAuth" />
            <UiSocialAuthButton provider="apple" @click="signInWithOAuth" />
            <UiSocialAuthButton provider="facebook" @click="signInWithOAuth" />
          </div>
        </UForm>

        <UButton label="Login" variant="link" class="pt-5" to="/login" />
      </div>
    </div>
  </div>
</template>
