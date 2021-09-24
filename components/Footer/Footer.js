import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <select className={styles.selectLang} name="language" id="lang">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
      </select>
    </footer>
  );
}
