export const useAuth = () => {
  const supabase = useSupabaseClient();

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };

  const register = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { data, error };
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    return { data, error };
  };

  return {
    login,
    register,
    logout,
    getUser,
  };
};
