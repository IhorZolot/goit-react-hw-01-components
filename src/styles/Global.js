import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;