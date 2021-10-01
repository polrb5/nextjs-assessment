import { useContext, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";
import Lang from "../Lang";

export default function useTranslation() {
  const { localeLang } = useContext(LocaleContext);
  const [translation, settranslation] = useState(Lang);

  const t = (str) => {
    const result = translation.find(({ tag }) => tag === str);
    if (localeLang === "en-US") {
      return result.valueLang.en;
    }
    if (localeLang === "es") {
      return result.valueLang.es;
    }
  };
  return { t, translation };
}
