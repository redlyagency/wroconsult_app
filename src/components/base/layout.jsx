import React from "react"
import { Helmet } from "react-helmet"
import CookieConsent from 'react-cookie-consent';

import Header from "./header"
import Footer from "./footer"

import { CookieDataAlert, HelmetData } from "../../utils/data/layoutData"

import { GlobalStyle } from "../../utils/theme/global.theme"

import "../../fonts/fonts.css"
import { CookieConsentWrapper } from "../../styles/index.style"

const Layout = (props) => {
    return (
        <>
            <div className="container">
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
                <CookieConsentWrapper
                    style={{
                        position: 'fixed'
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
                <Footer />
            </div>
        </>
    )
}

export default Layout