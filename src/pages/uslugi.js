import React from "react"

import Layout from "../components/base/layout"

import {
  PageWrapper,

} from "../styles/uslugi.style"

import { UslugiPageData } from "../utils/data/uslugiPageData"
import { Headers } from "../utils/data/headersData"

import H1 from "../components/Headers/h1"
import H2 from "../components/Headers/h2"
import P1 from "../components/paragraphs/p1"

const UslugiPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <H1
          name={ Headers.Uslugi }
        />
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {UslugiPageData.map((value, index) => {
            return (
              <>
                <H2
                  key={index}
                  name={value.Title}
                />
                <P1 
                  key={index}
                  name={value.Content}
                />
              </>
            )
          })}
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default UslugiPage