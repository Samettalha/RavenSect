import '../styles/globals.css';
import { ThemeProvider } from '../components/ThemeContext';
import { supabase } from '../lib/supabase';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} supabase={supabase} />
        </ThemeProvider>
    );
}

export default MyApp;
