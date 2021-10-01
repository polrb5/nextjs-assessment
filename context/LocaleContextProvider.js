import { useRouter } from "next/router";
import { useState } from "react";
import { LocaleContext } from "./LocaleContext";

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
