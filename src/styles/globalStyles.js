import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --ColorPrimary: #27ae60;
    --ColorGrey600: #333333;
    --ColorGrey300: #828282;
    --ColorGrey100: #e0e0e0;
    --ColorWhite: #FFFFFF;
    --ColorSucess: #168821;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }
`