import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createApiClient = () => {
  return createClient(supabaseUrl, supabaseKey);
}

export const createBrowserClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey);
}