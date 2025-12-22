<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";
import type {
  TablesInsert
} from '~/types/database.types'
const props = withDefaults(
  defineProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    isIconOnly?: boolean;
  }>(),
  {
    size: "md",
    isIconOnly: false,
  }
);

const { createSubscription } = useSubscriptions();
const state = reactive<TablesInsert<'subscriptions'>>({
  name: "",
  price: 0,
  currency: "USD",
  billing_cycle: "monthly",
  start_date: new Date().toISOString(),
  next_payment_date: "",
  active: true,
});
const currencyOptions = ref<SelectItem[]>([
  { label: "USD", value: "USD" },
  { label: "MXN", value: "MXN" },
  { label: "YEN", value: "YEN" },
]);
const billingOptions = ref<SelectItem[]>([
  { label: "Montly", value: "montly" },
  { label: "Yearly", value: "yearly" },
]);

const handleSubmit = (async()=>{
  await createSubscription(state)
})
</script>
<template>
  <UModal
    title="New Subscription"
    description="Enter your subscription information"
  >
    <UButton
      variant="solid"
      :size="size"
      color="primary"
      icon="i-lucide-plus"
      :class="[isIconOnly ? 'rounded-full aspect-square p-3' : 'rounded-md']"
    >
      <template #default>
        <span v-if="!isIconOnly"> Add subscription </span>
      </template>
    </UButton>
    <template #body>
      <UForm @submit="handleSubmit">
        <UFormField label="Subscription name">
          <UInput placeholder="Name" v-model="state.name" type="text"></UInput>
        </UFormField>
        <UFormField label="Price">
          <UInput placeholder="$$" v-model="state.price" type="number"></UInput>
        </UFormField>
        <UFormField label="Currency">
          <USelect :items="currencyOptions" v-model="state.currency"></USelect>
        </UFormField>
        <UFormField label="Billing cycle">
          <USelect
            :items="billingOptions"
            v-model="state.billing_cycle"
          ></USelect>
        </UFormField>
        <UFormField label="Price">
          <UInput v-model="state.next_payment_date" type="date"></UInput>
        </UFormField>
        <UButton type="submit" label="Create">

        </UButton>
      </UForm>
    </template>
  </UModal>
</template>
