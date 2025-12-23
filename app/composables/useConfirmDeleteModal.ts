import { reactive, toRefs } from "vue";
import type { Tables } from "~/types/database.types";

const state = reactive({
  isOpen: false,
  subscription: null as Tables<"subscriptions"> | null,
});

export const useConfirmDeleteModal = () => {
  const open = (sub: Tables<"subscriptions">) => {
    state.subscription = sub;
    state.isOpen = true;
  };

  const close = () => {
    state.isOpen = false;
    setTimeout(() => {
      state.subscription = null;
    }, 300);
  };

  return {
    ...toRefs(state), // Esto permite desestructurar { isOpen, subscription } manteniendo la reactividad
    open,
    close,
  };
};