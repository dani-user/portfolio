import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://rykzvwfgtcisnubfenlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5a3p2d2ZndGNpc251YmZlbmx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NTg2NjIsImV4cCI6MjA2NTEzNDY2Mn0.djQtMQeCX3ta4_yOXE8XOxQOWOhY-i3_pOceTXs_p-Q'
);