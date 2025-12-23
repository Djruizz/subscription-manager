<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";
import { newSubscriptionSchema } from "@@/schemas/subscription.schema";

const { createSubscription } = useSubscriptions();

const { close } = useCreateSubscriptionModal();

const handleSubmit = async () => {
  const parsed = newSubscriptionSchema.safeParse(state);

  if (!parsed.success) {
    console.error(parsed.error);
    return;
  }

  await createSubscription(parsed.data);
  close();
};

const state = reactive({
  name: "",
  price: 0,
  currency: "USD",
  billing_cycle: "monthly",
  start_date: new Date().toISOString().split('T')[0],
  next_payment_date: "",
  active: true,
});

const currencyOptions = ref<SelectItem[]>([
  { label: "USD", value: "USD" },
  { label: "MXN", value: "MXN" },
  { label: "YEN", value: "YEN" },
]);
const billingOptions = ref<SelectItem[]>([
  { label: "Monthly", value: "monthly" },
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
