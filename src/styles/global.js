import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
/* Color Theme Swatches in HSLA */
    --red: hsla(343, 90%, 39%, 1); 
    --blue: hsla(202, 94%, 43%, 1); 
    --auqa: hsla(174, 96%, 43%, 1); 
    --yellow: hsla(45, 96%, 48%, 1); 
    --white: hsla(0, 0%, 95%, 1); 
    --gray: hsla(0, 0%, 71%, 1);
    --font: hsl(0,0%, 0%);
    --bg:hsla(0, 0%, 95%, 1);
}
html{
  font-family: 'Poppins', sans-serif;
  color:var(--font);
background-color:var(--bg);
  
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
img{
 max-width: 100%
}
h1,h2,h3,h4{
  margin:0;
}
  `;
export default GlobalStyles;
