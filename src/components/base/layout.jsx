import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import "../../fonts/fonts.css"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins';
    }
    #root {margin: 0;padding: 0;}
    ::-webkit-scrollbar {width: 13px;} 
    ::-webkit-scrollbar-track {background-color: #1C1C1C;}
    ::-webkit-scrollbar-thumb {background-color: #5D5D5D; border-radius: 999px; border: 3px #1C1C1C solid}
    body {
        background-color: #e95a5a;
        margin: 50px;
        padding: 0;
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
    }
`
const LayoutWrapper = styled.div`
    background-color: blue;
    height: 100%;
    width: 100%;
    margin: 0;
`

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <GlobalStyle />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wroconsult | studia wykonalności, restrukturyzacja, dofinansowanie</title>
                <meta name="description" content="Blisko 20-letnie doświadczenie doradców Wroconsult pozwala na skuteczną pomoc klientom z sektora publicznego i prywatnego." />
                <link rel="canonical" href="http://wroconsult.pl" />
            </Helmet>
            {props.children}
        </LayoutWrapper>
    )
}

export default Layout