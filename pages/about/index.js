import Link from "next/link";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import MainSection from "../../components/MainSection/MainSection";
import { LocaleContext } from "../../context/LocaleContext";
import useTranslation from "../../hooks/useTranslation";
import styles from "../../styles/About.module.css";

export default function About() {
  const { t } = useTranslation();
  const { tags } = useContext(LocaleContext);

  return (
    <>
      <div className={styles.sectionTop}>
        <Button>
          <Link href="/">{t(tags.goHome)}</Link>
        </Button>
      </div>
      <MainSection />
      <Footer />
    </>
  );
}
