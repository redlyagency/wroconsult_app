import React from "react"

import Layout from "../components/base/layout"

import {
  PageWrapper
} from "../styles/nasiKlienci.style"

//import { NasiKlienciPageData } from "../utils/data/nasiKlienciPageData"
import { Headers } from "../utils/data/headersData"

import H1 from "../components/headers/h1"

const NaszeProjektyPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <H1
          name={ Headers.Aktualnosci }
        />
        
      </PageWrapper>
    </Layout>
  )
}

export default NaszeProjektyPage