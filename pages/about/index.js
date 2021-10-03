import Link from "next/link";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import MainSection from "../../components/MainSection/MainSection";
import useTranslation from "../../hooks/useTranslation";
import styles from "../../styles/About.module.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.sectionTop}>
        <Button>
          <Link href="/">{t("goHome")}</Link>
        </Button>
      </div>
      <MainSection />
      <Footer />
    </>
  );
}
