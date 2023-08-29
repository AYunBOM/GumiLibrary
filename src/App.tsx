import { createGlobalStyle } from "styled-components";
import Router from "./Router";

const GlobaleStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  menu, ol, ul {
    list-style: none;
  }
  body {
    line-height: 1;
    background-color: white;
    //background-image: url("Img/library.jpg");
    background: linear-gradient(
      to left,
      rgba(255, 255,255,0) 10%,
      rgba(255, 255,255,0.3) 25%,
      rgba(255, 255,255,0.5) 40%,
      rgba(255, 255,255,0.7) 50%,
      rgba(255, 255,255,0.8) 75%,
      rgba(255, 255,255,1) 100%,
    ), url("Img/library.jpg");
    color: ${(props) => props.theme.textColor};
    font-weight: bold;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *{
    box-sizing:border-box;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  button {
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 30px;
    border: none;
    margin: 3px;
    padding: 2px 10px;
  }
  `;

function App() {
  return (
    <>
      <GlobaleStyle />
      <Router />
    </>
  );
}

export default App;
