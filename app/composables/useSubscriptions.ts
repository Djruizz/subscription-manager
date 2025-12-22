import type {
  Tables,
  TablesInsert
} from '~/types/database.types'

export const useSubscriptions = () => {
  const supabase = useSupabaseClient();
  
  const getAllSubscriptions = async (): Promise<Tables<'subscriptions'>[]> => {
    const { data, error } = await supabase
      .from("subscriptions")
      .select("*")
    if (error) throw error

    return data ?? []
  };

  const createSubscription = (async(sub: TablesInsert<'subscriptions'>)=>{
    const { error } = await supabase
      .from('subscriptions').insert(sub)
    if (error) throw error
  })

  return{
    getAllSubscriptions,
    createSubscription,
  }
};
