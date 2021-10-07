import "../styles/globals.css";
import "@fontsource/poppins";
import Layout from "../components/Layout/Layout";
import { LocaleContextProvider } from "../context/LocaleContextProvider";
import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

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
