import React from "react"

import Layout from "../components/base/layout"

import {
  PageWrapper,
  LeftSidePage,
  RightSidePage,
  LeftSideInnerContainer,
  CenterSidePage,
  OrParagraph,
  FooterWrapper,
} from "../styles/kontakt.style"

import { Headers } from "../utils/data/headersData"
import { FooterData } from "../utils/data/layoutData"

import H1 from "../components/headers/h1"
import ContactParagraph from "../components/paragraphs/contactParagraph"
import ContactFormulage from "../components/form/contactFormulage"

const NaszeProjektyPage = () => {
  return (
    <Layout isIndexPage>
      <PageWrapper>
        <LeftSidePage>
          <LeftSideInnerContainer>
            <H1
              name={ Headers.Kontakt }
            />
            <ContactFormulage />
          </LeftSideInnerContainer>
        </LeftSidePage>
        <CenterSidePage>
          <OrParagraph>lub</OrParagraph>
        </CenterSidePage>
        <RightSidePage>
          <ContactParagraph />
        </RightSidePage>
        <FooterWrapper>
          { FooterData.Title }
        </FooterWrapper>
      </PageWrapper>
    </Layout>
  )
}

export default NaszeProjektyPage