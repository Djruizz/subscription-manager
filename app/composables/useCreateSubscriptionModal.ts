// composables/useCreateSubscriptionModal.ts
export const useCreateSubscriptionModal = () => {
  const isOpen = useState<boolean>("create-subscription-modal", () => false);

  const open = (): void => {
    isOpen.value = true;
    console.log(isOpen.value)
  };
  const close = (): void => {
    isOpen.value = false;
    console.log(isOpen.value)
  };

  return {
    isOpen,
    open,
    close,
  };
};
