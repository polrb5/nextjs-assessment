import { useRouter } from "next/router";
import { useState } from "react";
import useTranslation from "../../hooks/useTranslation";
import styles from "./Footer.module.css";

export default function Footer() {
  const router = useRouter();
  const { locale, locales } = router;
  const { t } = useTranslation();

  const handleLocaleChange = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <footer className={styles.footer}>
      <label htmlFor="select-lang">{t("selectLanguage")}:</label>
      <select
        id="select-lang"
        className={styles.selectLang}
        onChange={handleLocaleChange}
        defaultValue={locale}
      >
        <option value={locales[0]}>English</option>
        <option value="es">Español</option>
      </select>
    </footer>
  );
}
