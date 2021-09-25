import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const { locale } = router;

  const lang = [
    { tag: "greeting", valueLang: { es: "Hola", en: "Hello" } },
    {
      tag: "selectLanguage",
      valueLang: { es: "Selecciona idioma", en: "Select language" },
    },
    { tag: "about", valueLang: { es: "Sobre", en: "About" } },
  ];

  const [words, setWords] = useState(lang);

  const t = (str) => {
    if (locale === "en-US") {
      const result = words.find(({ tag }) => tag === str);
      return result.valueLang.en;
    }
    if (locale === "es") {
      const result = words.find(({ tag }) => tag === str);
      return result.valueLang.es;
    }
  };

  return (
    <header className={styles.header}>
      <Link href="/" passHref={true}>
        <Image src="/logo.png" alt="logo" width="64" height="64" />
      </Link>
      <Button>
        <Link href={{ pathname: "/about" }} passHref>
          {t("about")}
        </Link>
      </Button>
    </header>
  );
}
