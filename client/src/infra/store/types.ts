import { type createStore, type Atom } from "jotai";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AtomTuple<T extends Atom<any>> = readonly [T, any];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InitialValues<T extends Atom<any>> = ReadonlyArray<AtomTuple<T>>;

export type Store = ReturnType<typeof createStore>;
