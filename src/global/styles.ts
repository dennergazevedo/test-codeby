import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
    text-decoration: none !important;
    outline: 0 !important;
    max-width: 100vw !important;
  }
`;
export default GlobalStyle;
