import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import "../../fonts/fonts.css"
import CookieConsent from 'react-cookie-consent';

import Header from "./header"
import Footer from "./footer"

import { CookieDataAlert, HelmetData } from "../../data/layoutData"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins';
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
    /* Cookie style */
    .StyledContainerClasses {
        background-color: #E5E5E5;
        width: 100vw;
        left: 0;
        position: fixed;
        margin-bottom: 45px;
        padding: 15px 200px 15px 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;

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
        font-family: 'Poppins-Regular';
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

`
const LayoutWrapper = styled.div`

`

const Layout = (props) => {
    return (
        <LayoutWrapper className="container">
            <GlobalStyle />
            <Helmet>
                <meta
                    charSet="utf-8"
                />
                <title>
                    { HelmetData.Title }
                </title>
                <meta
                    name="description"
                    content={ HelmetData.Description }
                />
                <link
                    rel="canonical" href={ HelmetData.WebsiteLink }
                />
            </Helmet>
            <Header />
                {props.children}
            <CookieConsent
                buttonText={ CookieDataAlert.AcceptBtn }
                cookieName="gatsby-gdpr-google-analytics"
                disableStyles="true"
                containerClasses="StyledContainerClasses"
                buttonClasses="StyledButtonClasses"
                contentClasses="StyledContentClasses"
            >
                {CookieDataAlert.Content}
            </CookieConsent>
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout