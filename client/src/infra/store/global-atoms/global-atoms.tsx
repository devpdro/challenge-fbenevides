import { createContext, useContext, useRef } from "react";
import type { ReactNode } from "react";

import type { Atom, WritableAtom } from "jotai";
import { useAtom, useAtomValue, useSetAtom, createStore } from "jotai";

import type { Store } from "src/infra/store";

const GlobalContext = createContext<Store>(null as unknown as Store);

export const useGlobalStore = () => useContext(GlobalContext);

export const useGlobalAtom = <T, Args extends unknown[], Result>(
  atom: WritableAtom<T, Args, Result>
) => {
  const store = useGlobalStore();
  return useAtom(atom, { store });
};

export const useGlobalAtomValue = <T,>(atom: Atom<T>) => {
  const store = useGlobalStore();
  return useAtomValue(atom, { store });
};

export const useGlobalSetAtom = <
  Value,
  Update extends unknown[],
  Result extends void | Promise<void>
>(
  atom: WritableAtom<Value, Update, Result>
) => {
  const store = useGlobalStore();
  return useSetAtom(atom, { store });
};

export const GlobalAtomsProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<Store>(null as unknown as Store);

  if (!storeRef.current) {
    storeRef.current = createStore();
  }

  return (
    <GlobalContext.Provider value={storeRef.current}>
      {children}
    </GlobalContext.Provider>
  );
};
