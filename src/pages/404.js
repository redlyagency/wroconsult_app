import * as React from "react"

import Layout from "../components/base/layout"

import {
  PageWrapper,
} from "../styles/404.style"

import { Page404Data } from "../utils/data/layoutData"

import MainBtn from "../components/Buttons/mainBtn"

class Page404 extends React.Component {
  render() {
    return (
      <Layout>
        <PageWrapper>
          {Page404Data.Content}
          <MainBtn
            name={Page404Data.BtnTitle}
            link={Page404Data.BtnLink}
          />
        </PageWrapper>
      </Layout>
    )
  }
}

export default Page404