
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://seaxzsjwbkhmrddycgge.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlYXh6c2p3YmtobXJkZHljZ2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxODA4MDksImV4cCI6MjA4NDc1NjgwOX0.XIUexVh2XotL6Rko_aPm-14QUtrO1bjpYGjouRZ1VPo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
