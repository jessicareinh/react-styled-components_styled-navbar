import { createGlobalStyle } from "styled-components";
import { Moirai_One } from "next/font/google";

const moiraiOne = Moirai_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
 
  }

  body {
    margin: 0 auto;
    max-width: 480px;
    font-family: ${moiraiOne.style.fontFamily};
    padding: 8px;
    background-color: #e2caed;
  }
`;
