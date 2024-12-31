import { supabase } from 'lib/supabase';
abase
function MyApp({ Component, pageProps }) {
  return (
    // Supabase bağlamı gerekirse buraya eklenebilir
    <Component {...pageProps} supabase={supabase} />
  );
}

export default MyApp;
