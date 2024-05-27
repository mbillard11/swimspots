import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = 'https://wqtwawcvetjqjlnjlfaj.supabase.co'
const ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxdHdhd2N2ZXRqcWpsbmpsZmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2ODM1ODAsImV4cCI6MjAzMjI1OTU4MH0.Ovy64flw8G7HwU2lK_n15gIV3pbzWeTHrcMagddP6Ng'

export const supabase = createClient(PROJECT_URL, ANON_KEY)
