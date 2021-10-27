import React from "react"

import Layout from "../components/base/layout"

import {
  PageWrapper
} from "../styles/nasiKlienci.style"

import { NasiKlienciPageData } from "../utils/data/nasiKlienciPageData"
import { Headers } from "../utils/data/headersData"

import H1 from "../components/Headers/h1"
import H2 from "../components/Headers/h2"
import P1 from "../components/paragraphs/p1"

const NasiKlienciPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <H1
          name={ Headers.NasiKlienci }
        />
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {NasiKlienciPageData.map((value, index) => {
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
        <div style={{width: '100%', height: '100px'}} />
      </PageWrapper>
    </Layout>
  )
}

export default NasiKlienciPage