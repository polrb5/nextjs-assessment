import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref={true}>
        <Image src="/logo.png" alt="logo" width="64" height="64" />
      </Link>
      <Button>
        <Link href="/about">About</Link>
      </Button>
    </header>
  );
}
