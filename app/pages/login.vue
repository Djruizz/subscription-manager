<script setup lang="ts">
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
  <div>
    <button @click="signInWithPass">Sign In with E-Mail</button>
    <p>email</p>
    <input v-model="email" type="email" />
    <p>pass</p>
    <input v-model="password" type="text" />
  </div>
</template>
