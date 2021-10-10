import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTranslations } from "../src/redux/slices/translations";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTranslations());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}
