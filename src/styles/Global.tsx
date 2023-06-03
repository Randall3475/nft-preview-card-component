import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Outfit', sans-serif;
    min-height: 100vh;
    background-color: #0D192C;
  }

  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }

  input, textarea, button, select {
    font: inherit;
  }
`;

export const Main = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
