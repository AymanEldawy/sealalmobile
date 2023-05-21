import { GlobalOptionsProvider } from "@/context/GlobalOptions";
import { LangContextProvider } from "@/context/LangContext";

import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <GlobalOptionsProvider>
      <LangContextProvider>
        <Component {...pageProps} />
      </LangContextProvider>
    </GlobalOptionsProvider>
  );
}
export default App;
