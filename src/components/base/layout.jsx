import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import CookieConsent from 'react-cookie-consent'
import "@fontsource/poppins"

import Header from "./header"
import Footer from "./footer"

import { CookieDataAlert, HelmetData } from "../../utils/data/layoutData"

import { GlobalStyle } from "../../utils/theme/global.theme"

const Preloader = styled.div`
    background-color: #BF1E2D;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 99999999999999999;
    transition: 1s;
    animation-name: ease-out1;
    animation-duration: 1.5s;

    @keyframes ease-out1 {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        80% {
            opacity: 0;
        }
    }
`
const PreloaderSymbol = styled.div`
    position: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #BF1E2D;

    &:before,
    &:after {
        content: "";
        display: block;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        height: 70px;
        width: 70px;
        border: 2px white solid;
        border-radius: 50%;
        opacity: 1;
        animation: loader-1-ripple 3s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    }

    &:after {
        animation: loader-1-ripple2 3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s
            infinite;
    }

    @keyframes loader-1-ripple {
        0% {
            transform: translate3d(0, 0, 0) scale(0);
            opacity: 1;
        }
        20% {
            opacity: 1;
        }
        100% {
            transform: translate3d(0, 0, 0) scale(1.5);
            opacity: 0;
        }
    }

    @keyframes loader-1-ripple2 {
        0% {
            transform: translate3d(0, 0, 0) scale(0);
            opacity: 1;
        }
        20% {
            opacity: 1;
        }
        100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0;
        }
    }
`

const CookieConsentWrapper = styled.div`
    bottom: 0 !important;
    position: fixed !important;
    z-index: 9999 !important;
`

const Layout = (props, { children }) => {
    const [loader, setLoader]=useState(true);

    useEffect(()=>{
        setTimeout(()=> {
        setLoader(false)
        }, 1000)
    }, [])

    return (
        <>
            <div className="container">
                <CookieConsentWrapper
                        style={{
                            position: 'fixed',
                            bottom: '0',
                        }}
                >
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
                </CookieConsentWrapper>
                <GlobalStyle />
                <Helmet
                    htmlAttributes={{
                        lang: 'pl',
                    }}
                >
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
                    {loader ?
                        <Preloader>
                            <PreloaderSymbol />
                        </Preloader>
                    :  children}
                <Footer />
            </div>
        </>
    )
}

export default Layout