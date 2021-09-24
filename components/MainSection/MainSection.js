import Image from "next/image";
import styles from "./MainSection.module.css";

export default function MainSection() {
  return (
    <main className={styles.containerSection}>
      <section className={styles.section}>
        <div className={styles.card}>
          <h2>Jellyfish</h2>
          <Image
            src="/jellyfish1.jpg"
            alt="A jellyfish"
            width="250"
            height="250"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit
            numquam atque dolorum eos eaque.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Jellyfish</h2>
          <Image
            src="/jellyfish2.jpg"
            alt="A few jellyfish"
            width="250"
            height="250"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit
            numquam atque dolorum eos eaque.
          </p>
        </div>
      </section>
    </main>
  );
}
