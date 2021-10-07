import { useContext, useEffect, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";
import Lang from "../Lang";
import { API } from "aws-amplify";
import { listTranslations } from "../src/graphql/queries";

export default function useTranslation() {
  const { localeLang } = useContext(LocaleContext);
  const [translation, setTranslation] = useState([]);

  useEffect(() => {
    const pullData = async () => {
      const {
        data: {
          listTranslations: { items },
        },
      } = await API.graphql({ query: listTranslations });
      setTranslation(items);
    };
    pullData();
  }, []);

  const t = (str) => {
    const result = translation.find(({ tag }) => tag === str);
    if (result) {
      if (localeLang === "en-US") {
        return result.valueLang.en;
      }
      if (localeLang === "es") {
        return result.valueLang.es;
      }
    }
    if (!result) {
      // console.log(str);
      // throw new Error("This word can't be transalted");
    }
  };

  return { t, translation };
}
