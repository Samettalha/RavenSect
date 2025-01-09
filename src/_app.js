import { supabase } from '../../lib/supabase'; // doğru yol

abase
function MyApp({ Component, pageProps }) {
  return (
    // Supabase bağlamı gerekirse buraya eklenebilir
    <Component {...pageProps} supabase={supabase} />
  );
}

export default MyApp;
