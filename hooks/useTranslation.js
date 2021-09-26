import { useRouter } from "next/router";
import { useState } from "react";

export default function useTranslation() {
  const router = useRouter();
  const { locale } = router;

  const lang = [
    { tag: "greeting", valueLang: { es: "Hola", en: "Hello" } },
    {
      tag: "selectLanguage",
      valueLang: { es: "Selecciona idioma", en: "Select language" },
    },
    { tag: "about", valueLang: { es: "Sobre", en: "About" } },
  ];

  const [translation, settranslation] = useState(lang);

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
