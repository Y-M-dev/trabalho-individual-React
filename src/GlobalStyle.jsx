import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url("/Background.png");
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        text-align: center;
        font-family: 'Saira', 'Roboto Condensed', sans-serif;
        color: #fafafa;
    }`
export default GlobalStyle;