import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Poppins';
    }
    #root {margin: 0;padding: 0;}
    ::-webkit-scrollbar {width: 10px;} 
    ::-webkit-scrollbar-track {background-color: #ffffff;}
    ::-webkit-scrollbar-thumb {background-color: #5D5D5D; border-radius: 999px; border: 2px #ffffff solid}
    ::-moz-selection { /* Code for Firefox */ color: #BF1E2D;background: #ffffff;}
    ::selection {color: #ffffff; background: #bf1e2e6c;}
    html {
        height: 100vh;
        min-height: 100vh;
        min-width: 320px;
    }
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        min-height: 100vh;
        font-family: "Poppins";
        min-width: 320px;
    }
    .tl-edges, .tl-wrapper, .tl-wrapper--mount, .tl-wrapper-status--entered {
        height: 100vh !important;
        min-height: 100vh !important;
        min-width: 320px;
    }
    .tl-wrapper {
        transform: none !important;
    }
    .selected {
        ::before {
            content: '';
            height: 3px;
            width: 18px;
            background-color: #BF1E2D;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -8px;
            border-radius: 100px;
            transition: 0.2s !important;
        }
    }
    .selected2 {
        ::before {
            content: '';
            height: 4px;
            width: 18px;
            background-color: #BF1E2D;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -8px;
            border-radius: 100px;
            transition: 0.2s !important;
        }
    }
    /* Cookie style */
    .StyledContainerClasses {
        background-color: #E5E5E5;
        width: 100vw;
        left: 0;
        position: fixed;
        margin-bottom: 15px;
        padding: 15px 200px 15px 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;

        @media (max-width: 1023px) {
            margin-bottom: 0;
            padding: 15px 100px 15px 100px;
        }
        @media (max-width: 767px) {
            margin-bottom: 0;
            padding: 15px 15px 15px 15px;
            display: block;
        }
    }
    .StyledButtonClasses {
        background-color: #BF1E2D;
        font-size: 15px;
        color: white;
        font-family: 'Poppins';
        padding: 7px 15px 7px 15px;
        border-radius: 5px;
        margin-left: 20px;
        border: 2px #BF1E2D solid;
        transition: 0.2s;

        :hover {
            background-color: transparent;
            color: #BF1E2D;
        }

        @media (max-width: 767px) {
            margin-left: 50%;
            transform: translateX(-50%);
            padding: 7px 150px 7px 150px;
            margin-top: 10px;
        }
        @media (max-width: 450px) {
            padding: 7px 100px 7px 100px;
        }
    }
    .StyledContentClasses {
        text-align: center;
        font-size: 13px;
        color: #515254;
    }
    .hoveredBtn {
        :hover {
            color: #515254 !important;
        }
    }

    #tsparticles > canvas {
        width: 750px !important;
        height: 100vh !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
    }

`