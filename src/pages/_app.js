import { LangContextProvider } from '@/context/LangContext';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <LangContextProvider>
      <Component {...pageProps} />
    </LangContextProvider>
  );
}
export default App;
