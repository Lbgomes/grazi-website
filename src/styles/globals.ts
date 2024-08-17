import { createGlobalStyle, css } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;

    }
    
    body {
      padding: 0;
      background-color: #fff;
      font-family:'Nunito Sans', sans-serif;
      font-size: 1.6rem;
      color: #000;
      height: 100vh;
      margin: 0;
    }
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: 700;
    }
    #root,
    #__next {
      isolation: isolate;
      width: 100%;
    }
    .swal2-popup {
      font-size: 2rem !important;
    }
    iframe: {
    height: 650px !important;
}
    @font-face {
  font-family: "clash";
  src: url('./fonts/ClashDisplay-Variable.ttf') format("truetype");
}
`


export default GlobalStyles