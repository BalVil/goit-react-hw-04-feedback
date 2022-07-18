import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  min-height: 100vh;
  background-color: white;
}
a {
  text-decoration: none;
  font-weight: inherit;
  font-size: 12px;
}
h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  height: auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`;
