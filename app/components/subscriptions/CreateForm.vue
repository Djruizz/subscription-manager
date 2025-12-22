<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";
import type { TablesInsert } from "~/types/database.types";

const { createSubscription } = useSubscriptions();
const { close } = useCreateSubscriptionModal();

const handleSubmit = async () => {
  await createSubscription(state);
  close();
};

const state = reactive<TablesInsert<"subscriptions">>({
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
</script>
<template>
  <UForm @submit="handleSubmit" :state="state">
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
      <USelect :items="billingOptions" v-model="state.billing_cycle"></USelect>
    </UFormField>
    <UFormField label="Next payment date">
      <UInput v-model="state.next_payment_date" type="date"></UInput>
    </UFormField>
    <UButton type="submit" label="Create"> </UButton>
  </UForm>
</template>
