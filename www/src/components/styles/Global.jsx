import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
   };

*, *::before, *::after {
    box-sizing: border-box;
}

body{
    height: 100vh;
    background-image: url('../pozadin4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.faqbtn{
    float: left;
    margin-top: 5vh;
}

`
export default GlobalStyles;
