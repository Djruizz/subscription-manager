<script setup lang="ts">
import { type Tables } from "~/types/database.types";
const { open: openDeleteModal, } = useConfirmDeleteModal();
const { openEdit } = useSubscriptionModal()

import type { DropdownMenuItem } from "#ui/types";
const props = defineProps<{
  sub: Tables<"subscriptions">;
}>();
const emits = defineEmits<{
  edit: [id: string];
  delete: [id: string];
}>();
const getActionItems: DropdownMenuItem[] = [
  [
    {
      label: "Edit",
      icon: "i-lucide-square-pen",
      onSelect: () => handleEdit(),
    },
    {
      label: "Delete",
      icon: "i-lucide-trash-2",
      color: "error",
      onSelect: () => handleDelete(),
    },
  ],
];

const handleEdit = () => {
  openEdit(props.sub)
};
const handleDelete = () => {
  openDeleteModal(props.sub);
};
</script>
<template>
  <UDropdownMenu :items="getActionItems">
    <UButton variant="link" color="neutral" icon="i-lucide-ellipsis-vertical" />
  </UDropdownMenu>
</template>
