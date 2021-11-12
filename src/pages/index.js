import * as React from "react"

import Layout from "../components/base/layout"

import {
  PageWrapper,
  HeroContainer,
  StyledMainHeaderHero,
  StyledUnderMainHeaderHero,
  ImageHeroRightSideComponentWrapper,
  ImageHeroRightSideComponentIMAGEWRAPPER,
  ImageHeroRightSideComponent,
  HeaderWrapper,
  FooterWrapper,
  LeftSide,
  RightSide,
} from "../styles/index.style"

import { IndexPageData } from "../utils/data/indexPageData"
import { FooterData } from "../utils/data/layoutData"

const IndexPage = () => {
  return (
    <Layout isIndexPage>
      <div style={{height: '70vh'}}/>
      <PageWrapper>
        <LeftSide>
          <HeaderWrapper>
            <StyledMainHeaderHero>
              { IndexPageData.MainHeaderHero }
            </StyledMainHeaderHero>
            <StyledUnderMainHeaderHero>
              { IndexPageData.UnderMainHeaderHero }
            </StyledUnderMainHeaderHero>
          </HeaderWrapper>
        </LeftSide>
        <RightSide />
      </PageWrapper>
      <FooterWrapper>
          { FooterData.Title }
      </FooterWrapper>
    </Layout>
  )
}

export default IndexPage