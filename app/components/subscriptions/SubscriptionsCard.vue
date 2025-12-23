<script setup lang='ts'>
import {type Tables} from '~/types/database.types'
import {getInitials, formatPrice} from '~/utils/format'

const props = defineProps<{
  sub: Tables<'subscriptions'>
}>()

</script>


<template>
  <div
    :key="sub.id"
    class="group flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-sm"
  >
    <div class="flex items-center gap-4">
      <div
        class="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 font-bold border border-slate-700 group-hover:bg-slate-800/80"
      >
        {{ getInitials(sub.name) }}
      </div>

      <div>
        <h3 class="text-white font-medium text-lg leading-tight">
          {{ sub.name }}
        </h3>
        <div class="flex items-center gap-2 mt-1">
          <span
            class="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full"
            >{{ sub.category }}</span
          >
          <span class="text-xs text-slate-500"
            >• Next: {{ sub.next_payment_date }}</span
          >
        </div>
      </div>
    </div>

    <div class="flex items-center gap-6 text-right">
      <div class="hidden sm:block">
        <span
          class="px-2.5 py-1 rounded-full text-xs font-medium border"
          :class="
            sub.active == true
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
          "
        >
          {{ sub.next_payment_date }}
        </span>
      </div>

      <div>
        <p class="text-white font-bold text-lg">
          {{ formatPrice(sub.price, sub.currency) }}
        </p>
        <p class="text-xs text-slate-500">/mo</p>
      </div>

      <SubscriptionsCardActions :sub="sub"/>
    </div>
  </div>
</template>
