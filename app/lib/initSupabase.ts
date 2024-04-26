import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://tcqpgqcgbahjvlitchyl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjcXBncWNnYmFoanZsaXRjaHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMzQzMzAsImV4cCI6MjAyOTcxMDMzMH0.BGQD0_9KWP6t8RK_Y0gfGK181miu6fe4ykr-b4XGlXM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// Admin Access
const service_role_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjcXBncWNnYmFoanZsaXRjaHlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDEzNDMzMCwiZXhwIjoyMDI5NzEwMzMwfQ.EtOQzqEtsokxsVvuUE8ZYCiRoPdhBhsdselBX6Ch2I8';
const supabaseWithAdminRole = createClient(supabaseUrl, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Access auth admin api
export const adminAuthClient = supabaseWithAdminRole.auth.admin;
