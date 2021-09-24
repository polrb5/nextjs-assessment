import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <select className={styles.selectLang} name="language" id="lang">
        <Link href={router.asPath} passHref={true}>
          <option locale="en-EN" value="english">
            English
          </option>
        </Link>
        <Link href={router.asPath} passHref={true}>
          <option locale="es-ES" value="spanish">
            Spanish
          </option>
        </Link>
      </select> */}
    </footer>
  );
}
