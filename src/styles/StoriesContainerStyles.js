import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
    -webkit-box-sizing: border-box;
    -box-sizing: border-box;
}
*, *:before, *:after {
    -webkit-box-sizing: inherit;
    -box-sizing: inherit;
}
body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #2C498D;
    background-color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}
ul {
    margin: 0;
    padding: 0;
}
h1 {
    font-weight: 400;
}
img {
width: 100%;
max-height: 60vh;
}
`
export const StoriesContainerWrapper = styled.main `
max-width : 800px;
padding: 20px 15px;
margin: auto;
`