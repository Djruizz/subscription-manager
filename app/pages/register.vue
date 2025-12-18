<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref<string>("")
const password = ref<string>("")

const signUpUser = (async ()=>{
const {error} = await supabase.auth.signUp({
    email: email.value,
    password: password.value
})
if(error){
    throw new Error("Error al registrar")
}
})

</script>
<template>
    <h1>Register</h1>
</template>