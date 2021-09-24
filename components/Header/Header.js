import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const lang = [
    { tag: "greeting", valueLang: { es: "Hola", en: "Hello" } },
    {
      tag: "selectLanguage",
      valueLang: { es: "Selecciona idioma", en: "Select language" },
    },
  ];

  const about =
    router.locale === "en-US"
      ? "about"
      : router.locale === "es"
      ? "sobre mi"
      : "";

  return (
    <header className={styles.header}>
      <Link href="/" passHref={true}>
        <Image src="/logo.png" alt="logo" width="64" height="64" />
      </Link>
      <Button>
        <Link href="/about">{about}</Link>
      </Button>
    </header>
  );
}
