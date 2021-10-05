import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { LocaleContext } from "../../context/LocaleContext";
import useTranslation from "../../hooks/useTranslation";
import styles from "./Footer.module.css";

export default function Footer() {
  const { localeLang, setLocaleLang } = useContext(LocaleContext);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("locale", localeLang);
  }, [localeLang]);

  const handleLocaleChange = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
    setLocaleLang(locale);
  };

  return (
    <footer className={styles.footer}>
      <label htmlFor="select-lang">{t("selectLanguage")}:</label>
      <select
        id="select-lang"
        className={styles.selectLang}
        onChange={handleLocaleChange}
        value={localeLang}
      >
        <option value={"en-US"}>English</option>
        <option value={"es"}>Español</option>
      </select>
    </footer>
  );
}
