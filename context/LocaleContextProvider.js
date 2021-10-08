import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LocaleContext } from "./LocaleContext";
import { API } from "aws-amplify";
import { listTranslations } from "../src/graphql/queries";

export const LocaleContextProvider = (props) => {
  const { children } = props;
  const router = useRouter();
  const { locale } = router;
  const [localeLang, setLocaleLang] = useState(locale);
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    const pullData = async () => {
      const {
        data: {
          listTranslations: { items },
        },
      } = await API.graphql({ query: listTranslations });
      setTranslations(items);
    };
    pullData();
  }, []);

  return (
    <LocaleContext.Provider value={{ localeLang, setLocaleLang, translations }}>
      {children}
    </LocaleContext.Provider>
  );
};
