import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/base/layout"

import {
  PageWrapper
} from "../styles/nasiKlienci.style"

//import { NasiKlienciPageData } from "../utils/data/nasiKlienciPageData"
import { Headers } from "../utils/data/headersData"

import H1 from "../components/headers/h1"

const NaszeProjektyPage = ({ data }) => {
  const articles = data.allDatoCmsArticle.edges

  return (
    <Layout>
      <PageWrapper>
        <H1
          name={ Headers.Aktualnosci }
        />
        <div>
            {articles.map(({node}) => {
                return (
                    <div key={node.slug}>
                        <a href={node.slug}>
                            {node.title}
                        </a>
                    </div>
                )
            })}
        </div>
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
    query {
        allDatoCmsArticle {
            edges {
                node {
                    title
                    slug
                    content
                }
            }
        }
    }
`

export default NaszeProjektyPage