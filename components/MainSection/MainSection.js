import Image from "next/image";
import useTranslation from "../../hooks/useTranslation";
import styles from "./MainSection.module.css";

export default function MainSection() {
  const { t } = useTranslation();

  return (
    <main className={styles.containerSection}>
      <section className={styles.section}>
        <div className={styles.card}>
          <h2>{t("jellyfish")}</h2>
          <Image
            src="/jellyfish1.jpg"
            alt="A jellyfish"
            width="250"
            height="250"
          />
          <p>{t("descriptionJellyfish")}</p>
        </div>
        {/*   <div className={styles.card}>
          <h2>{t("jellyfish")}</h2>
          <Image
            src="/jellyfish2.jpg"
            alt="A few jellyfish"
            width="250"
            height="250"
          />
          <p>{t("descriptionJellyfish")}</p>
        </div> */}
      </section>
    </main>
  );
}
