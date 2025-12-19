<script setup lang="ts">
const supabase = useSupabaseClient()

const logout = (async()=>{
    const { error } = await supabase.auth.signOut()
    useRouter().push('/login')
})
</script>

<template>
    <h1 class="bg-red-500">Index</h1>
    <button @click="logout">logout</button>
</template>