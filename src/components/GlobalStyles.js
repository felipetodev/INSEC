import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }

        &::-webkit-scrollbar-track {
            background: white;
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }

    h2 {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: lightsalmon;
    }

    h3 {
        font-size: 1.2rem;
        color: #333;
        padding: 1.5rem 0;
    }

    p {
        font-size: 0.8rem;
        line-height: 200%;
        color: #696969;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    input {
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyles