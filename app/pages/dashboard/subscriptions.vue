<script setup lang="ts">
import ConfirmDeleteModal from '~/components/subscriptions/ConfirmDeleteModal.vue';

const { fetchSubscriptions, subscriptions, loading } = useSubscriptions();

onMounted(async () => {
  await fetchSubscriptions();
});

</script>
<template>
  <div v-if="!subscriptions.length">
    loading...
  </div>
  <div class="w-full max-w-5xl mx-auto space-y-4" v-else>
    
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-white">Mis Suscripciones</h2>
      <span class="text-sm text-gray-400">{{ subscriptions.length }} activas</span>
    </div>

    <div class="space-y-3">
      <SubscriptionsCard v-for="sub in subscriptions" :sub="sub" ></SubscriptionsCard>
    </div>
    
    <div class="mt-6 p-4 rounded-xl bg-linear-to-r from-emerald-900/20 to-slate-900 border border-emerald-500/20 flex justify-between items-center">
        <span class="text-slate-300 text-sm">Monthly ammount</span>
        <span class="text-2xl font-bold text-emerald-400">$567.00 <span class="text-sm font-normal text-emerald-600/70">MXN</span></span>
    </div>
    <ConfirmDeleteModal/>
  </div>
</template>
