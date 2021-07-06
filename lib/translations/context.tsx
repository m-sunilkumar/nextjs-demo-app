import React, { createContext, useContext } from "react";
import type { Locale } from "./locale";

export const LocaleContext = createContext<Locale>(null);

export const useLocaleContext = () => useContext(LocaleContext);
