import { createGlobalStyle } from 'styled-components'

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

  ::-webkit-scrollbar {
    width: .35rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
 
  ::-webkit-scrollbar-thumb {
    background: var(--ColorPrimary); 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--ColorSucess);
    transition: 0.5s;
  }
`