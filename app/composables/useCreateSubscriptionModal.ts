// composables/useCreateSubscriptionModal.ts
export const useCreateSubscriptionModal = () => {
  const isOpen = useState<boolean>("create-subscription-modal", () => false);

  const open = (): void => {
    isOpen.value = true;
  };
  const close = (): void => {
    isOpen.value = false;
  };

  return {
    isOpen,
    open,
    close,
  };
};
