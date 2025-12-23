import { type Tables } from "~/types/database.types";

export const useConfirmDeleteModal = () => {
  // useState asegura que el valor sea el mismo para todos los componentes
  const isOpen = useState<boolean>("delete-modal-open", () => false);
  const subscription = useState<Tables<"subscriptions"> | undefined>("delete-modal-data", () => undefined);

  const open = (sub: Tables<"subscriptions">): void => {
    subscription.value = sub;
    isOpen.value = true;
  };

  const close = (): void => {
    isOpen.value = false;
    subscription.value = undefined;
  };

  return {
    isOpen,
    subscription,
    open,
    close,
  };
};