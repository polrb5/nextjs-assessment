import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { LocaleContext } from "./LocaleContext";
import { useSelector } from "react-redux";

export const LocaleContextProvider = (props) => {
  const { children } = props;
  const router = useRouter();
  const { locale } = router;
  const [localeLang, setLocaleLang] = useState(locale);
  const { translations, loading } = useSelector((state) => state.translations);
  const [tags, setTags] = useState({});

  useEffect(() => {
    localStorage.setItem("locale", localeLang);
  });

  const tagsTranslations = useCallback(async () => {
    const tagData = await translations
      .map((translation) => {
        return translation.tag;
      })
      .reduce((a, v) => ({ ...a, [v]: v }), {});
    setTags(tagData);
  }, [translations]);

  useEffect(() => {
    tagsTranslations();
  }, [tagsTranslations]);

  return (
    <LocaleContext.Provider value={{ localeLang, setLocaleLang, tags }}>
      {children}
    </LocaleContext.Provider>
  );
};
