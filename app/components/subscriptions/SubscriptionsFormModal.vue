<script setup lang="ts">
const { isOpen, isEdit, selectedSub } = useSubscriptionModal();

const title = computed(() => {
  return isEdit.value 
    ? `Edit Subscription: ${selectedSub.value?.name ?? ''}` 
    : 'New Subscription'
})
</script>
<template>
  <UModal
    :title="title"
    :description="
      isEdit
        ? 'Update your subscription details'
        : 'Enter your subscription information'
    "
    v-model:open="isOpen"
  >
    <template #body>
      <SubscriptionsForm
        :initial-sub="isEdit ? selectedSub : undefined"
      />
    </template>
  </UModal>
</template>
