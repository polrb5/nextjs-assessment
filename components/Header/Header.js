import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref={true}>
        <Image src="/logo.png" alt="me" width="64" height="64" />
      </Link>
      <button className={styles.button}>
        <Link href="/about">About</Link>
      </button>
    </header>
  );
}
