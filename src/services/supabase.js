import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://otqlfgmqzcylhgzubgrs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90cWxmZ21xemN5bGhnenViZ3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyMDM1MTgsImV4cCI6MjAzMDc3OTUxOH0.7G9PkrFsubXJia608_GUQYPqOh6e6MwtrqfUPWsyUSE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
