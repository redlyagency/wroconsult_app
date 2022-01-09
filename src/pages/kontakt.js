import React from "react"

import Layout from "../components/base/layout"

import {
  PageWrapper,
  ContactBlockWrapper,
  ContactBlockWrapper2,
  ContactBlockWrapper3,
  IframeGoogleMaps,
} from "../styles/kontakt.style"

import { Headers } from "../utils/data/headersData"

import H1 from "../components/headers/h1"
import ContactParagraph from "../components/paragraphs/contactParagraph"
import ContactFormulage from "../components/form/contactFormulage2"

const NaszeProjektyPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <H1
          name={ Headers.Kontakt }
        />
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-2 mt-10">
            <ContactBlockWrapper>
              <ContactParagraph />
            </ContactBlockWrapper>
            <ContactBlockWrapper2>
              <ContactFormulage />  
            </ContactBlockWrapper2>  
          <ContactBlockWrapper3>
            <IframeGoogleMaps
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.4509309718869!2d16.921812829261626!3d51.16740783965954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fead9e5c829ad%3A0xa2b62464772832dd!2sSiedlecka%2026%2C%2054-101%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1635447637061!5m2!1spl!2spl"
              allowfullscreen=""
              loading="lazy"
            />
          </ContactBlockWrapper3>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default NaszeProjektyPage