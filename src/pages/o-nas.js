import React from "react"

import Layout from "../components/base/layout"

import {
  PageWrapper,

} from "../styles/oNas.style"

import { ONasPageData } from "../utils/data/oNasPageData"
import { Headers } from "../utils/data/headersData"

import H1 from "../components/Headers/h1"
import H2 from "../components/Headers/h2"
import P1 from "../components/paragraphs/p1"

const IndexPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <H1
          name={ Headers.ONas }
        />
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {ONasPageData.map((value, index) => {
            return (
              <>
                <H2
                  key={index}
                  name={value.Title}
                  width="75%"
                />
                <P1 
                  key={index}
                  name={value.Content}
                  width="75%"
                />
              </>
            )
          })}
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default IndexPage