import { createGlobalStyle } from "styled-components"

export const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100vw;
    height: 100vh;;
  }

  input {
    border: none;
  }

  input:focus {
    border: none;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button{
    border:none;
  }
`