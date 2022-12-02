import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
    //scrollbar configuration
    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background: #8A4F58;
    }
    ::-webkit-scrollbar-thumb {
      background: #EEDDDA;
      border-radius: 1rem;
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
    .styles__Arrow-sc-x8z8tz-0{
      bottom: 50%;
      @media(max-width: 600px){
        display: none;
      }
    }
 
`


export default GlobalStyles