import Link from "next/link";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import MainSection from "../../components/MainSection/MainSection";
import useTranslation from "../../hooks/useTranslation";
import styles from "../../styles/About.module.css";
import { API } from "aws-amplify";
import { listTranslations } from "../../src/graphql/queries";

export default function About({ tags }) {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.sectionTop}>
        <Button>
          <Link href="/">{t(tags.goHome)}</Link>
        </Button>
      </div>
      <MainSection tags={tags} />
      <Footer tags={tags} />
    </>
  );
}

export async function getServerSideProps() {
  const {
    data: {
      listTranslations: { items },
    },
  } = await API.graphql({ query: listTranslations });
  const tags = await items
    .map((translation) => {
      return translation.tag;
    })
    .reduce((a, v) => ({ ...a, [v]: v }), {});

  if (!items) {
    return {
      notFound: true,
    };
  }
  return {
    props: { tags },
  };
}
