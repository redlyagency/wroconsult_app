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
} from "../styles/index.style"

import { IndexPageData } from "../utils/data/indexPageData"

const IndexPage = () => {
  return (
    <Layout isIndexPage>
      <PageWrapper>
        <HeroContainer>
          <StyledMainHeaderHero>
            { IndexPageData.MainHeaderHero }
          </StyledMainHeaderHero>
          <StyledUnderMainHeaderHero>
            { IndexPageData.UnderMainHeaderHero }
          </StyledUnderMainHeaderHero>
        </HeroContainer>
        <ImageHeroRightSideComponentWrapper>
          <ImageHeroRightSideComponentIMAGEWRAPPER>
            <ImageHeroRightSideComponent/>
          </ImageHeroRightSideComponentIMAGEWRAPPER>
        </ImageHeroRightSideComponentWrapper>
      </PageWrapper>
    </Layout>
  )
}

export default IndexPage