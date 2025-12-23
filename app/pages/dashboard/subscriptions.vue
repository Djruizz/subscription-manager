<script setup lang="ts">
const { fetchSubscriptions, subscriptions, loading } = useSubscriptions();

onMounted(async () => {
  await fetchSubscriptions();
});

onMounted(async () => {
  fetchSubscriptions();
});
</script>
<template>
  <div class="w-full max-w-5xl mx-auto space-y-4">
    
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-white">Mis Suscripciones</h2>
      <span class="text-sm text-gray-400">{{ subscriptions.length }} activas</span>
    </div>

    <div class="space-y-3">
      <div 
        v-for="sub in subscriptions" 
        :key="sub.id"
        class="group flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-sm"
      >
        
        <div class="flex items-center gap-4">
          <div class="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 font-bold border border-slate-700 group-hover:bg-slate-800/80">
            {{ sub.name }}
          </div>

          <div>
            <h3 class="text-white font-medium text-lg leading-tight">{{ sub.name }}</h3>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">{{ sub.category }}</span>
              <span class="text-xs text-slate-500">• Próx: {{ sub.next_payment_date }}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-6 text-right">
          
          <div class="hidden sm:block">
            <span 
              class="px-2.5 py-1 rounded-full text-xs font-medium border"
              :class="sub.active == true? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'"
            >
              {{ sub.next_payment_date }}
            </span>
          </div>

          <div>
            <p class="text-white font-bold text-lg">{{ sub.price + sub.currency }}</p>
            <p class="text-xs text-slate-500">/mo</p>
          </div>

          <button class="text-slate-400 hover:text-white transition-colors p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
    
    <div class="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-900/20 to-slate-900 border border-emerald-500/20 flex justify-between items-center">
        <span class="text-slate-300 text-sm">Gasto mensual total</span>
        <span class="text-2xl font-bold text-emerald-400">$567.00 <span class="text-sm font-normal text-emerald-600/70">MXN</span></span>
    </div>

  </div>
</template>
