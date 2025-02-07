"use server";

import { fetchUserProfile } from "../../lib/fetch/user";
import { createClient } from "../../lib/supabase/server";

export async function fetchAuthState() {
  const supabase = await createClient();
  const {
    data: { session },
    error: authError,
  } = await supabase.auth.getSession();

  if (authError || !session) {
    return null;
  }

  try {
    const profileData = await fetchUserProfile(session.access_token);
    return profileData.isLoginUser;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}
