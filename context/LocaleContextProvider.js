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

  return (
    <LocaleContext.Provider value={{ localeLang, setLocaleLang }}>
      {children}
    </LocaleContext.Provider>
  );
};
