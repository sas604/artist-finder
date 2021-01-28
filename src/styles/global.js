import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
/* Color Theme Swatches in HSLA */
    --red: hsla(343, 90%, 39%, 1); 
    --blue: hsla(202, 94%, 43%, 1); 
    --auqa: hsla(174, 96%, 43%, 1); 
    --yellow: hsla(45, 96%, 48%, 1); 
    --white: hsla(0, 0%, 98%, 1); 
    --gray: hsla(0, 0%, 71%, 1);
    --font: hsl(0,0%, 0%);
    --bg:hsla(0, 0%, 98%, 1);
    --blue-shadow: hsla(202, 94%, 43%, 0.5); 
    --black:hsla(0,0%, 0%, 94%);
    --orange:hsla(30, 81%, 48%, 1);
    --moon: var(--gray);
    --sun: var(--orange);
}
.dark{
  --bg:hsla(0 ,0%, 11%, 1);
  --font:var(--white);
  --moon:var(--blue);
  --sun:var(--gray);
}
html{
  font-family: 'Poppins', sans-serif;
  

  
}
body{ 
  overflow-x:hiden;
  position:relative;
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
 
.css-0 {
    display: block;
    text-align: center;
    margin: 3rem auto;
  }`;
export default GlobalStyles;
