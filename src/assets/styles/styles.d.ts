import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: {
        900: string;
        800: string;
        400: string;
        200: string;
        50: string;
      };
      purple: {
        700: string;
        400: string;
      };
      green: {
        400: string;
      };
      red: {
        300: string;
      };
      blue: {
        400: string;
        100: string;
      };
      orange: {
        400: string;
      };
    };
  }
}
