import * as React from "react"
import Layout from "../components/base/layout"
import styled from "styled-components"

import BgLine from "../assets/svg/bg_line.svg"

import { IndexPageData } from "../data/indexPageData"

const PageWrapper = styled.div`
  background-image: url( ${ BgLine } );
  width: 100%;
  height: 70vh;
  margin-top: 35px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1023px) {
    margin-top: 20px;
  }
`
const StyledMainHeaderHero = styled.div`
  line-height: 75px;
  font-size: 70px;

  @media (max-width: 1279px) {
    line-height: 65px;
    font-size: 60px;
  }
  @media (max-width: 767px) {
    line-height: 55px;
    font-size: 50px;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <StyledMainHeaderHero>
          { IndexPageData.MainHeaderHero }
        </StyledMainHeaderHero>

      </PageWrapper>
    </Layout>
  )
}

export default IndexPage
