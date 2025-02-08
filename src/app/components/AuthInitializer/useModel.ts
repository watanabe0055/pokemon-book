"use server";

import { fetchUserProfile } from "../../lib/fetch/user";
import { createClient } from "../../lib/supabase/server";

export async function fetchAuthState(): Promise<boolean> {
  const supabase = await createClient();
  const {
    data: { session },
    error: authError,
  } = await supabase.auth.getSession();

  if (authError || !session) {
    return false;
  }

  try {
    const profileData = await fetchUserProfile(session.access_token);
    return profileData.isLoginUser;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return false;
  }
}
