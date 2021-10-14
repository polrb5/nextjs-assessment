import Image from "next/image";
import { useContext } from "react";
import { LocaleContext } from "../../context/LocaleContext";
import useTranslation from "../../hooks/useTranslation";
import styles from "./MainSection.module.css";

export default function MainSection() {
  const { t } = useTranslation();
  const { tags } = useContext(LocaleContext);

  return (
    <main className={styles.containerSection}>
      <section className={styles.section}>
        <div className={styles.card}>
          <h2>{t(tags.jellyfish)}</h2>
          <Image
            src="/jellyfish1.jpg"
            alt="A jellyfish"
            width="250"
            height="250"
          />
          <p>{t(tags.descriptionJellyfish)}</p>
        </div>
      </section>
    </main>
  );
}
