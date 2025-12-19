<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const supabase = useSupabaseClient();

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");

const signUpUser = async () => {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) {
    throw new Error("Error al registrar");
  }
};
const OAuth = async (provider: "google" | "apple" | "facebook") => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: "/",
    },
  });
  if (error) {
    console.error(error.message);
    return;
  }
};
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
        <UForm class="grid gap-4 xs:w-full min-w-0" @submit="signUpUser">
          <UFormField label="Name" class="w-full min-w-0">
            <UInput
              name="name"
              type="text"
              placeholder="Your Name"
              v-model="name"
              class="w-full min-w-px"
              size="md"
            />
          </UFormField>

          <UFormField label="Email" class="w-full min-w-0">
            <UInput
              name="email"
              type="email"
              placeholder="mail@example.com"
              v-model="email"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField label="Password" class="w-full min-w-0">
            <UInput
              name="password"
              type="password"
              placeholder="********"
              v-model="password"
              class="w-full min-w-0"
            />
          </UFormField>

          <UFormField label="Confirm Password" class="w-full min-w-0">
            <UInput
              name="confirmPass"
              type="password"
              placeholder="********"
              v-model="confirmPassword"
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
            <UiSocialAuthButton provider="google" @click="OAuth" />
            <UiSocialAuthButton provider="apple" @click="OAuth" />
            <UiSocialAuthButton provider="facebook" @click="OAuth" />
          </div>
        </UForm>

        <UButton label="Login" variant="link" class="pt-5" to="/login" />
      </div>
    </div>
  </div>
</template>
