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
    <Provider store={store}>
      <LocaleContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocaleContextProvider>
    </Provider>
  );
}

export default MyApp;
