<script setup lang="ts">
import { CalendarDate } from "@internationalized/date";

const { subscriptions, fetchSubscriptions } = useSubscriptions();

const today = new CalendarDate(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  new Date().getDate()
);

onMounted(() => {
  fetchSubscriptions();
});

const payments = computed(() => {
  return subscriptions.value
    .map((sub) => {
      if (!sub.next_payment_date) return null;
      const parts = sub.next_payment_date.split("-");
      // Assuming YYYY-MM-DD
      return new CalendarDate(
        parseInt(parts[0] ?? "0"),
        parseInt(parts[1] ?? "0"),
        parseInt(parts[2] ?? "0")
      );
    })
    .filter((d): d is CalendarDate => d !== null);
});

function hasPayment(daySource: any) {
  // Handle if daySource is the date object itself or a wrapper with .date property
  const date = daySource && daySource.date ? daySource.date : daySource;
  if (!date || typeof date.compare !== "function") return false;
  return payments.value.some((d) => d.compare(date) === 0);
}
</script>

<template>
  <UCalendar variant="solid" size="xl" :default-value="today" class="w-full">
    <template #day="{ day }">
      <UChip
        :show="hasPayment(day)"
        color="primary"
        size="md"
        position="top-right"
        inset
      >
        <span class="mx-auto">{{ day.day }}</span>
      </UChip>
    </template>
  </UCalendar>
</template>
