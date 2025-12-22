<script setup lang="ts">

const { isOpen, close } = useCreateSubscriptionModal()


</script>
<template>
  <UModal
    title="New Subscription"
    description="Enter your subscription information"
    v-model:open="isOpen"
  >
    <template #body>
      <SubscriptionsCreateForm/>
    </template>
  </UModal>
</template>
