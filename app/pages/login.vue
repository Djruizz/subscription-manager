<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
const supabase = useSupabaseClient();
const email = ref<string>("");
const password = ref<string>("");
const router = useRouter();

const signInWithPass = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.error(error);
    return;
  } else {
    router.push("/");
  }
};
</script>

<template>
  <UButton color="primary">HOLA</UButton>
</template>
