import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import useTranslation from "../../hooks/useTranslation";
import Button from "../Button/Button";

export default function Header(props) {
  const { tags } = props;
  const { t } = useTranslation();

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
