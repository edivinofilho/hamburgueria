import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --ColorColorPrimary: #27ae60;
    --ColorColorSecondary: #eb5757;
    --ColorGrey600: #333333;
    --ColorGrey300: #828282;
    --ColorGrey100: #e0e0e0;
    --ColorNegative: #e60000;
    --ColorWarning: #ffcd07;
    --ColorSucess: #168821;
    --ColorInformation: #155bcb;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }
`