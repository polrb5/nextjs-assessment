import { useRouter } from "next/router";
import { useState } from "react";
import Lang from "../Lang";

export default function useTranslation() {
  const router = useRouter();
  const { locale } = router;

  const [translation, settranslation] = useState(Lang);

  const t = (str) => {
    const result = translation.find(({ tag }) => tag === str);
    if (locale === "en-US") {
      return result.valueLang.en;
    }
    if (locale === "es") {
      return result.valueLang.es;
    }
  };
  return { t, translation };
}
