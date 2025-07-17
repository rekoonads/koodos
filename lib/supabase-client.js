import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bjapmtycxutntlbkgthf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqYXBtdHljeHV0bnRsYmtndGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NzQwMTYsImV4cCI6MjA2ODE1MDAxNn0.AnS7-mbNm7SOV6XwoO6oMohBdpmpik2IzSiBxPOf9-s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)