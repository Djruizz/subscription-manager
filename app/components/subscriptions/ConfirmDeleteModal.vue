<script setup lang="ts">
const { isOpen, subscription, close } = useConfirmDeleteModal();
const {} = useSubscriptions();
const confirmDelete = async () => {
  if (!subscription.value) return;
  close();
};
</script>
<template>
  <UModal v-model:open="isOpen">
    <template #content>
      <div class="flex flex-col justify-around p-10">
        <div class="h-50 flex flex-col items-center p-5 text-center">
          <UIcon name="i-lucide-circle-x" class="size-20 text-error" />
          <h1 class="text-xl font-semibold py-2">Delete subscription</h1>
          <p v-if="subscription">
            Are you sure you want to delete:
            <span class="font-semibold">{{ subscription.name }}</span>
          </p>
        </div>
        <div class="flex justify-center gap-5">
          <UButton
            label="Cancel"
            color="neutral"
            variant="soft"
            @click="close"
          ></UButton>
          <UButton
            label="Delete"
            color="error"
            variant="outline"
            @click="confirmDelete"
          ></UButton>
        </div>
      </div>
    </template>
  </UModal>
</template>
