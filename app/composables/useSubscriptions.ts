import type { Tables, TablesInsert } from "~/types/database.types";
export const useSubscriptions = () => {
  const supabase = useSupabaseClient();

  const subscriptions = ref<Tables<"subscriptions">[]>([]);
  const loading = ref(false);

  const fetchSubscriptions = async () => {
    loading.value = true;
    const { data, error } = await supabase.from("subscriptions").select("*");
    loading.value = false;

    if (error) throw error;

    subscriptions.value = data ?? [];
  };

  const createSubscription = async (payload: TablesInsert<"subscriptions">) => {
    const { error } = await supabase.from("subscriptions").insert(payload);

    if (error) throw error;
    await fetchSubscriptions()
  };

  return {
    subscriptions,
    loading,
    fetchSubscriptions,
    createSubscription,
  };
};
