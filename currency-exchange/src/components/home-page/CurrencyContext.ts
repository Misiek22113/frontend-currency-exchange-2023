import { createContext } from "react";

export type Currency = {
  currency: string;
  code: string;
  mid: string;
};

export interface CurrencyContextInterface {
  currencyData: Currency[] | null;
  currencyTableDate: string;
  currencyGetError: boolean;
}

export const CurrencyContext = createContext<CurrencyContextInterface>(
  {} as CurrencyContextInterface
);
