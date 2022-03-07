import {createGlobalStyle} from "styled-components";

export  default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root {
    min-height: 100%;
}

body {
    background: linear-gradient(180deg, #19867A 0%, rgba(16, 221, 209, 0.182292) 83.45%, rgba(46, 132, 127, 0) 99.48%);
    font-size: 14px;
  position: absolute;
    -webkit-font-smoothing: antialiased !important;
}

body, input, button {
    color: rgb(0, 0, 0);
    font-size: 14px;
    font-family: Barlow, Helverica, sans-serif;
}

button {
    cursor: pointer;
}


`;



