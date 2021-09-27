import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import useTranslation from "../../hooks/useTranslation";
/* import gql from "graphql-tag";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "./aws-exports"; */

export default function Header() {
  const { t } = useTranslation();
  /*
  const client = new AWSAppSyncClient({
    url: "https://xpmxjpnakbd57kuupyul4zgoba.appsync-api.eu-west-3.amazonaws.com/graphql",
    region: "eu-west-3",
    auth: {
      type: AUTH_TYPE.API_KEY, // or type: awsconfig.aws_appsync_authenticationType,
      apiKey: "da2-5zlfa6xpyvh3ffeqrnq6gdpgoq",
      type: AUTH_TYPE.API_ID,
      apiId: "letqyr4bobd23fmvzvcsfvk25u", // or type: awsconfig.aws_appsync_authenticationType,
    },
  });

  const loadTranslations = async () => {
    const resp = await fetch(client);
    const data = await resp.json();
    console.log(data);
  };
 */
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
