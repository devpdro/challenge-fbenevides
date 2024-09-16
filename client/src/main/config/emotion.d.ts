import lightTheme from "src/presentation/styles/themes/light";

type DefaultTheme = typeof lightTheme;

declare module "@emotion/react" {
  export interface Theme extends DefaultTheme {}
}
