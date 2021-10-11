import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";
import { useSelector } from "react-redux";

export default function useTranslation() {
  const { localeLang } = useContext(LocaleContext);
  const { translations } = useSelector((state) => state.translations);

  const t = (str) => {
    const result = translations.find(({ tag }) => tag === str);
    if (result) {
      if (localeLang === "en-US") {
        return result.valueLang.en;
      }
      if (localeLang === "es") {
        return result.valueLang.es;
      }
    }
    if (!result) {
      // throw new Error("This word can't be translated");
    }
  };

  return { t };
}
