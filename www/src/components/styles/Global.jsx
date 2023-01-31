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
    background-image: url('../CraftApp/pozadin4.jpg');
    background-size: cover;
}

.faqbtn{
    float: left;
    margin-top: 5vh;
}



input:focus{
        color: #777777;
        outline:none;
    };

`
export default GlobalStyles;
