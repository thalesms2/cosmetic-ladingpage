import { createGlobalStyle } from 'styled-components';

import MontserratBlack from '../../assets/fonts/Montserrat-Black.ttf';
import MontserratBlackItalic from '../../assets/fonts/Montserrat-BlackItalic.ttf';
import MontserratBold from '../../assets/fonts/Montserrat-Bold.ttf';
import MontserratBoldItalic from '../../assets/fonts/Montserrat-BoldItalic.ttf';
import MontserratExtraBold from '../../assets/fonts/Montserrat-ExtraBold.ttf';
import MontserratExtraBoldItalic from '../../assets/fonts/Montserrat-ExtraBoldItalic.ttf';
import MontserratExtraLight from '../../assets/fonts/Montserrat-ExtraLight.ttf';
import MontserratExtraLightItalic from '../../assets/fonts/Montserrat-ExtraLightItalic.ttf';
import MontserratItalic from '../../assets/fonts/Montserrat-Italic.ttf';
import MontserratLight from '../../assets/fonts/Montserrat-Light.ttf';
import MontserratMedium from '../../assets/fonts/Montserrat-Medium.ttf';
import MontserratRegular from '../../assets/fonts/Montserrat-Regular.ttf';
import MontserratMediumItalic from '../../assets/fonts/Montserrat-MediumItalic.ttf';
import MontserratLightItalic from '../../assets/fonts/Montserrat-LightItalic.ttf';
import MontserratSemiBold from '../../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratSemiBoldItalic from '../../assets/fonts/Montserrat-SemiBoldItalic.ttf';
import MontserratThin from '../../assets/fonts/Montserrat-Thin.ttf';
import MontserratThinItalic from '../../assets/fonts/Montserrat-ThinItalic.ttf';

import RobotoBlack from '../../assets/fonts/Roboto-Black.ttf';
import RobotoBlackItalic from '../../assets/fonts/Roboto-BlackItalic.ttf';
import RobotoBold from '../../assets/fonts/Roboto-Bold.ttf';
import RobotoBoldItalic from '../../assets/fonts/Roboto-BoldItalic.ttf';
import RobotoItalic from '../../assets/fonts/Roboto-Italic.ttf';
import RobotoLight from '../../assets/fonts/Roboto-Light.ttf';
import RobotoLightItalic from '../../assets/fonts/Roboto-LightItalic.ttf';
import RobotoMedium from '../../assets/fonts/Roboto-Medium.ttf';
import RobotoMediumItalic from '../../assets/fonts/Roboto-MediumItalic.ttf';
import RobotoRegular from '../../assets/fonts/Roboto-Regular.ttf';
import RobotoThin from '../../assets/fonts/Roboto-Thin.ttf';
import RobotoThinItalic from '../../assets/fonts/Roboto-ThinItalic.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'),
             url(${MontserratBlack}) format('truetype');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
             url(${RobotoMedium}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
        font-family: "Roboto",arial,sans-serif;
    }
    :root {
        @media screen {
            --margin: 1em;
            --card-width: 25vw;
            --card-height: 70vh;
            --card-half-height: 35vh;
            --app-margin: 11vw;
        }
        @media screen and (max-width: 1000px) {
            --margin: 1em;
            --card-width: 37vw;
            --card-height: 70vh;
            --card-half-height: 35vh;
        }
        @media screen and (max-width: 800px) {
            --margin: 1em;
            --card-width: 45vw;
            --card-height: 70vh;
            --card-half-height: 35vh;
            --app-margin: 3vw;
        }
        @media screen and (max-width: 600px) {
            --margin: 1em;
            --card-width: 80vw;
            --card-height: 70vh;
            --card-half-height: 35vh;
            --app-margin: 10vw;
        }
        --border-radius: .2em;
    }

    
`;

export default GlobalStyle;