import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import CookieConsent from 'react-cookie-consent'

import Header from "./header"
import Footer from "./footer"

import { CookieDataAlert, HelmetData } from "../../utils/data/layoutData"

import { GlobalStyle } from "../../utils/theme/global.theme"
import { CircularProgress } from "@mui/material"

const Preloader = styled.div`
    background-color: #cfcfcf;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 99999999999999999;
    transition: 1s;
    animation-name: ease-out1;
    animation-duration: 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;

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
                <Header isIndexPage={ props.isIndexPage } />
                    {props.children}
                    {loader ?
                        <Preloader>
                            <CircularProgress color="error" />
                        </Preloader>
                    :  children}
                <Footer isIndexPage={ props.isIndexPage }/>
            </div>
        </>
    )
}

export default Layout