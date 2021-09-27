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
    { tag: "goHome", valueLang: { es: "Ir inicio", en: "Go home" } },
    { tag: "jellyfish", valueLang: { es: "Medusa", en: "Jellyfish" } },
    {
      tag: "descriptionJellyfish",
      valueLang: {
        es: "Las medusas viven en el mar y no suelen molestar a nadie.",
        en: "Jellyfish live in the sea and do not usually bother anyone.",
      },
    },
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
