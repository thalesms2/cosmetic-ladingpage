import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
    }
    :root {
        @media screen and (min-width: 1200px) {
            --margin: 1em;
            --card-width: 25vw;
            --card-height: 70vh;
            --card-half-height: 35vh;
        }
        @media screen and (min-width: 1000px) {
            --margin: 1em;
            --card-width: 100vw;
            --card-height: 90vh;
            --card-half-height: 35vh;
        }
        @media screen and (min-width: 800px) {
            --margin: 1em;
            --card-width: 25vw;
            --card-height: 70vh;
            --card-half-height: 35vh;
        }
        @media screen and (min-width: 400px) {
            --margin: 1em;
            --card-width: 25vw;
            --card-height: 70vh;
            --card-half-height: 35vh;
        }
        --border-radius: .2em;
    }
`;

export default GlobalStyle;

// TODO change to min-width to max-width idiot