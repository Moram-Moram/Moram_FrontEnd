import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
  }
`;

export default global;
