import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { LocaleContext } from "../../context/LocaleContext";
import useTranslation from "../../hooks/useTranslation";
import Button from "../Button/Button";
import { useContext } from "react";

export default function Header() {
  const { t } = useTranslation();
  const { tags } = useContext(LocaleContext);

  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="logo" width="64" height="64" />
      <Button>
        <Link href="/about">
          <a>{t(tags.about)}</a>
        </Link>
      </Button>
    </header>
  );
}
