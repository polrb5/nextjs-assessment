import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import useTranslation from "../../hooks/useTranslation";
import Button from "../Button/Button";
import { useCallback, useState } from "react";

export default function Header({ items }) {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="logo" width="64" height="64" />
      <Button>
        <Link href="/about">
          <a>{t("about")}</a>
        </Link>
      </Button>
    </header>
  );
}

export async function getStaticProps(context) {
  const resp = await fetch(config.aws_appsync_graphqlEndpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      "X-Api-Key": config.aws_appsync_apiKey,
    },
    body: JSON.stringify({
      query: `query MyQuery {
  listTranslations {
    items {
      valueLang {
        en
        es
      }
      id
      tag
    }
  }
}`,
    }),
  });
  const {
    data: {
      listTranslations: { items },
    },
  } = await resp.json();

  return {
    props: { items },
  };
}
