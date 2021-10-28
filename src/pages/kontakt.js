import React from "react"
import styled from "styled-components"

import Layout from "../components/base/layout"

import {
  PageWrapper
} from "../styles/kontakt.style"

//import { NasiKlienciPageData } from "../utils/data/nasiKlienciPageData"
import { Headers } from "../utils/data/headersData"

import H1 from "../components/headers/h1"
import ContactParagraph from "../components/paragraphs/contactParagraph"
import ContactFormulage from "../components/form/contactFormulage"

const IframeGoogleMaps = styled.iframe`
  border: 0;
  height: 450px;
  width: 450px;

  @media (max-width: 500px) {
    height: 300px;
    width: 300px;
  }
`
const IframeGoogleMapsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NaszeProjektyPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <H1
          name={ Headers.Kontakt }
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-10">
          <div>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <ContactParagraph />
              </div>
              <div>
                <ContactFormulage />  
              </div>  
            </div>
          </div>
          <IframeGoogleMapsWrapper>
            <IframeGoogleMaps src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.4509309718869!2d16.921812829261626!3d51.16740783965954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fead9e5c829ad%3A0xa2b62464772832dd!2sSiedlecka%2026%2C%2054-101%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1635447637061!5m2!1spl!2spl" allowfullscreen="" loading="lazy" />
          </IframeGoogleMapsWrapper>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default NaszeProjektyPage