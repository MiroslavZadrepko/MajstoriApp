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

a {
    border: 2px solid #002E52;
    padding: 2vh 4vw;
    text-align: center;
    text-decoration: none;
    border-radius: 25px;
    color: #002E52;
    display: flex; 
    max-width: 50vh;
    background-color: #DDF1FA;
};

a:hover {
    color: white;
    background-color: #777777;
    border: 2px solid #777777;
};

input{
    border: solid #777777;
    height: 50px;
    text-align:center;
    border-radius: 25px;
    margin-right:15vw;

    ::placeholder{
        text-align:center;
    };
};

input:focus{
        border-color: #002E52;
        outline:none;
    };

h2 {
    margin-top: 25px;
    margin-bottom: 5px;
    margin-left: 5vw;
    color: #012D52;
    text-align: center;
}
`
export default GlobalStyles;
