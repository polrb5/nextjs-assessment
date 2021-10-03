import "../styles/globals.css";
import "@fontsource/poppins";
import Layout from "../components/Layout/Layout";
import { LocaleContextProvider } from "../context/LocaleContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <LocaleContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocaleContextProvider>
  );
}

export default MyApp;
