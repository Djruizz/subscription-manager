<script setup lang="ts">
import type {Tables} from '~/types/database.types'
const { getAllSubscriptions } = useSubscriptions()

const subs = ref<Tables<'subscriptions'>[]>([])

onMounted(async () => {
  subs.value = await getAllSubscriptions()
})

</script>
<template>
  <h1>Subscriptions</h1>
  <p>{{ subs }}</p>
</template>
