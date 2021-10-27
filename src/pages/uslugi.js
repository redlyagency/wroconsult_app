import React from "react"

import Layout from "../components/base/layout"

import {
  PageWrapper,

} from "../styles/uslugi.style"

import { UslugiPageData } from "../utils/data/uslugiPageData"
import { Headers } from "../utils/data/headersData"

import H1 from "../components/Headers/h1"

const IndexPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <H1
          name={ Headers.Uslugi }
        />
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {UslugiPageData.map((value, index) => {
            return (
              <>
                <div key={index}>{value.Title}</div>
                <div key={index}>{value.Content}</div>
              </>
            )
          })}
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default IndexPage