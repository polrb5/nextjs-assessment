import { useContext, useEffect, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";

export default function useTranslation() {
  const { localeLang, translations } = useContext(LocaleContext);

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
      console.log(str);
      // throw new Error("This word can't be translated");
    }
  };

  return { t };
}
