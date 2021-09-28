import { useRouter } from "next/router";
import { useState } from "react";
import Lang from "../Lang";

export default function useTranslation() {
  const router = useRouter();
  const { locale } = router;

  const [translation, settranslation] = useState(Lang);

  const t = (str) => {
    if (locale === "en-US") {
      const result = translation.find(({ tag }) => tag === str);
      return result.valueLang.en;
    }
    if (locale === "es") {
      const result = translation.find(({ tag }) => tag === str);
      return result.valueLang.es;
    }
  };
  return { t, translation };
}
