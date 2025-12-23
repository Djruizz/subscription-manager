export const useProfile = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const profile = ref<any | null>(null);
  const loading = ref(false);

  const getProfileData = async () => {
    loading.value = true;

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .single(); // RLS garantiza una sola fila

    loading.value = false;

    if (error) throw error;
    profile.value = data;
  };

  watch(
    () => user.value?.id,
    (id) => {
      if (id) getProfileData();
      else profile.value = null;
    },
    { immediate: true }
  );
  
  const fullName = computed(() => profile.value?.full_name ?? "");
  const firstName = computed(() => fullName.value.split(" ")[0] ?? "");

  const lastName = computed(
    () => fullName.value.split(" ")[fullName.value.split(" ").length - 2]
  );

  const shortName = computed(() =>
    `${firstName.value} ${lastName.value}`.trim()
  );

  const currency = computed(() => profile.value?.currency_pref);

  const email = computed(() => user.value?.email ?? "");

  return {
    // state
    profile,
    loading,
    // derived
    firstName,
    lastName,
    shortName,
    currency,
    email,
    // actions
    getProfileData,
  };
};
