import { supabase } from 'api/supabase';

function MyApp({ Component, pageProps }) {
  return (
    // Supabase bağlamı gerekirse buraya eklenebilir
    <Component {...pageProps} supabase={supabase} />
  );
}

export default MyApp;
