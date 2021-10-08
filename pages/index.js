import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
/* import { API } from "aws-amplify";
import { listTranslations } from "../src/graphql/queries"; */

export default function Home(/* { items } */) {
  /*   const [translations, setTranslations] = useState(items);
  console.log(translations); */
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}

/* export async function getStaticProps() {
  const {
    data: {
      listTranslations: { items },
    },
  } = await API.graphql({ query: listTranslations });
  return {
    props: { items },
  };
}
 */
