import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTranslations } from "../src/redux/slices/translations";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
import { API } from "aws-amplify";
import { listTranslations } from "../src/graphql/queries";

export default function Home({ tags }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTranslations());
  }, [dispatch]);

  return (
    <>
      <Header tags={tags} />
      <MainSection tags={tags} />
      <Footer tags={tags} />
    </>
  );
}

export async function getServerSideProps() {
  const {
    data: {
      listTranslations: { items },
    },
  } = await API.graphql({ query: listTranslations });
  const tags = await items
    .map((translation) => {
      return translation.tag;
    })
    .reduce((a, v) => ({ ...a, [v]: v }), {});

  if (!items) {
    return {
      notFound: true,
    };
  }
  return {
    props: { tags },
  };
}
