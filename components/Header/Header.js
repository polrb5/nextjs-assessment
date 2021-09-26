import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import useTranslation from "../../hooks/useTranslation";

export default function Header() {
  const { t, translation } = useTranslation();

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
