import type { Tables, TablesInsert } from "~/types/database.types";
export const useSubscriptions = () => {
  const supabase = useSupabaseClient();
  const toast = useToast();
  const subscriptions = useState<Tables<"subscriptions">[]>(
    "subscriptions",
    () => []
  );
  const loading = ref(false);

  const fetchSubscriptions = async () => {
    loading.value = true;
    const { data, error } = await supabase.from("subscriptions").select("*");
    loading.value = false;

    if (error) throw error;

    subscriptions.value = data ?? [];
  };

  const createSubscription = async (payload: TablesInsert<"subscriptions">) => {
    const { data, error } = await supabase
      .from("subscriptions")
      .insert(payload)
      .select();

    if (error) {
      toast.add({
        title: "Subscription created successfully",
        description: error.message,
        icon: "i-lucide-circle-x",
        color: "error",
      });
      throw error;
    }
    if (data[0]) {
      toast.add({
        title: "Subscription created successfully:",
        description: data[0].name,
        icon: "i-lucide-circle-check",
        color: "primary",
      });
    }

    await fetchSubscriptions();
  };

  const editSubscription = async (payload: TablesInsert<"subscriptions">) => {
    const { data, error } = await supabase
      .from("subscriptions")
      .update(payload).eq('id', payload.id!)
      .select();

    if (error) {
      toast.add({
        title: "Error editing subscription",
        description: error.message,
        icon: "i-lucide-circle-x",
        color: "error",
      });
      throw error;
    }
    if (data[0]) {
      toast.add({
        title: "Subscription updated successfully:",
        description: data[0].name,
        icon: "i-lucide-circle-check",
        color: "primary",
      });
    }

    await fetchSubscriptions();
  };

  const deleteSubscription = async (id: string) => {
    const { data, error } = await supabase
      .from("subscriptions")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      toast.add({
        title: "Error deleting subscription",
        description: error.message,
        icon: "i-lucide-circle-x",
        color: "error",
      });
      throw error;
    }
    if (data[0]) {
      toast.add({
        title: "Subscription deleted successfully:",
        description: data[0].name,
        icon: "i-lucide-circle-check",
        color: "primary",
      });
    }

    await fetchSubscriptions();
  };


  return {
    subscriptions,
    loading,
    fetchSubscriptions,
    createSubscription,
    deleteSubscription,
    editSubscription,
  };
};
