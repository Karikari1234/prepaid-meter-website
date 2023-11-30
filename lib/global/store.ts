import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

interface TokenFormState {
  meterNo: string | null;
  customerNo: string | null;
  setMeterNo: (by: string) => void;
  setCustomerNo: (by: string) => void;
}

export const useTokenStore = create<TokenFormState>()(
  devtools(
    (set) => ({
      meterNo: null,
      customerNo: null,
      setMeterNo: (by) => set((state) => ({ meterNo: by })),
      setCustomerNo: (by) => set((state) => ({ customerNo: by })),
    }),
    {
      name: "token-form-storage",
    },
  ),
);
