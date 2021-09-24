import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}
