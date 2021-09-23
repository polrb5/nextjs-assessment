import Link from "next/link";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import MainSection from "../../components/MainSection/MainSection";
import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.sectionTop}>
        <Button>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
      <MainSection />
      <Footer />
    </>
  );
}
