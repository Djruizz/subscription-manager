export const useAuth = () => {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const toast = useToast();

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      toast.add({
        title: "Login Failed",
        description: error.message,
        color: "error",
      });
      throw error;
    }
    toast.add({
      title: "Logged in succesfully",
      icon: "i-lucide-circle-check",
      color: "primary",
    });
    router.push("/dashboard");
  };
  const signUp = async (email: string, password: string, full_name: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options:{
        data: {full_name}
      }
    });
    if (error) {
      toast.add({
        title: "Register failed",
        description: error.message,
        icon: "i-lucide-circle-x",
        color: "error",
      });
      throw error;
    }
    toast.add({
      title: "User created",
      icon: "i-lucide-circle-check",
      color: "primary",
    });
    router.push("/dashboard");
  };
  const signInWithOAuth = async (provider: "google" | "apple" | "facebook") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: "/dashboard",
      },
    });
    if (error) {
      toast.add({
        title: "Login Failed",
        description: error.message,
        icon: "i-lucide-circle-x",
        color: "error",
      });
      throw error;
    }
    toast.add({
      title: "Logged in succesfully",
      icon: "i-lucide-circle-check",
      color: "primary",
    });
  };
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.add({
        title: "Sign out error",
        icon: "i-lucide-circle-x",
        description: error.message,
        color: "error",
      });
      throw error;
    }
    toast.add({
      title: "Signed out succesfully",
      icon: "i-lucide-circle-check",
      color: "neutral",
    });
    router.push("/login");
  };
  return {
    signIn,
    signUp,
    signInWithOAuth,
    signOut,
  };
};
