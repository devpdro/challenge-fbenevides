import { atom } from "jotai";

interface Auth {
  token: string;
}

export const INITIAL_AUTH_VALUE: Auth = {
  token: "",
};

export const authState = atom<Auth>(INITIAL_AUTH_VALUE);
