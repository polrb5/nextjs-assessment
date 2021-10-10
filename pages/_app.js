import "../styles/globals.css";
import "@fontsource/poppins";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout/Layout";
import { LocaleContextProvider } from "../context/LocaleContextProvider";
import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <LocaleContextProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </LocaleContextProvider>
  );
}

export default MyApp;
