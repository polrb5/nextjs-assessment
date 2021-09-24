import { useRouter } from "next/router";
import styles from "./Footer.module.css";

export default function Footer() {
  const router = useRouter();
  const { locale, locales } = router;

  const handleLocaleChange = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  console.log(locales);

  return (
    <footer className={styles.footer}>
      <select
        className={styles.selectLang}
        onChange={handleLocaleChange}
        defaultValue={locale}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </footer>
  );
}
