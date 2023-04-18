import { LangContextProvider } from '@/context/LangContext';
import { UserRoleContextProvider } from '@/context/UserContext';

import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <UserRoleContextProvider>
      <LangContextProvider>
        <Component {...pageProps} />
      </LangContextProvider>
    </UserRoleContextProvider>
  );
}
export default App;
