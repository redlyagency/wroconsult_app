import * as React from "react"

import Layout from "../components/base/layout"
import Slider from "../components/swiper/swiper"

import {
  PageWrapper,
  HeroContainer,
  StyledMainHeaderHero,
  StyledUnderMainHeaderHero,
  StyledMarkSliderContainer,
  SliderElement,
} from "../styles/index.style"

import { IndexPageData } from "../data/indexPageData"

const IndexPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <HeroContainer>
          <StyledMainHeaderHero>
            { IndexPageData.MainHeaderHero }
          </StyledMainHeaderHero>
          <StyledUnderMainHeaderHero>
            { IndexPageData.UnderMainHeaderHero }
          </StyledUnderMainHeaderHero>
          <StyledMarkSliderContainer>
            { IndexPageData.MarkSliderTitle }
            <SliderElement>
              <Slider />
            </SliderElement>
          </StyledMarkSliderContainer>
        </HeroContainer>
      </PageWrapper>
    </Layout>
  )
}

export default IndexPage