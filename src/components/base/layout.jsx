import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import "../../fonts/fonts.css"

import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins';
        transition: 0.2s !important;
    }
    #root {margin: 0;padding: 0;}
    ::-webkit-scrollbar {width: 13px;} 
    ::-webkit-scrollbar-track {background-color: #1C1C1C;}
    ::-webkit-scrollbar-thumb {background-color: #5D5D5D; border-radius: 999px; border: 3px #1C1C1C solid}
    ::-moz-selection { /* Code for Firefox */ color: #BF1E2D;background: #ffffff;}
    ::selection {color: #ffffff; background: #bf1e2e6c;}
    body {
        margin: 0;
        padding: 0;
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
`
const LayoutWrapper = styled.div`

`

const Layout = (props) => {
    return (
        <LayoutWrapper className="container">
            <GlobalStyle />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wroconsult | studia wykonalności, restrukturyzacja, dofinansowanie</title>
                <meta name="description" content="Blisko 20-letnie doświadczenie doradców Wroconsult pozwala na skuteczną pomoc klientom z sektora publicznego i prywatnego." />
                <link rel="canonical" href="https://www.wroconsult.pl" />
            </Helmet>
            <Header />
            {props.children}
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout