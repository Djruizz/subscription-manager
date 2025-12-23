<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";
import {
  newSubscriptionSchema,
  type NewSubscriptionInput,
} from "@@/schemas/subscription.schema";
import {type Tables} from '~/types/database.types'
const { createSubscription, editSubscription } = useSubscriptions();
const { close } = useSubscriptionModal();

const props = defineProps<{
  initialSub?: Tables<'subscriptions'>;
}>();

const state = reactive({
  name: props.initialSub?.name ?? "",
  category: props.initialSub?.category ?? "",
  price: props.initialSub?.price ?? 0,
  currency: props.initialSub?.currency ?? "USD",
  billing_cycle: props.initialSub?.billing_cycle ?? "monthly",
  start_date: props.initialSub?.start_date ?? new Date().toISOString().split("T")[0],
  next_payment_date: props.initialSub?.next_payment_date ?? "",
  active: props.initialSub?.active ?? true,
});

const handleSubmit = async () => {
  const parsed = newSubscriptionSchema.safeParse(state);

  if (!parsed.success) {
    console.error(parsed.error);
    return;
  }
  if(props.initialSub){
    await editSubscription(parsed.data, props.initialSub.id)
  }else{
    await createSubscription(parsed.data);
  }

  
  close();
};

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
    <UFormField label="Category">
      <UInput
        placeholder="Category"
        v-model="state.category"
        type="text"
      ></UInput>
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
