export const useUser = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const firstName = ref<string>();
  const lastName = ref<string>();
  const shortName = ref<string>();
  const currency = ref<string>();

  const getProfileData = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .single();
    if (error) throw error;

    if (data) {
      firstName.value = data.full_name?.split(" ")[0];
      lastName.value =
        data.full_name?.split(" ")[data.full_name.split(" ").length - 2];
      shortName.value = `${firstName.value} ${lastName.value}`;
      currency.value = data.currency_pref;
      
      return data;
    }
    
  };

  watch(
    user,
    (u) => {
      if (u?.id) {
        getProfileData();
        console.log("GET Profile data");
      }
    },
    { immediate: true }
  );
  return {
    firstName,
    lastName,
    shortName,
    currency,
    getProfileData,
  };
};
