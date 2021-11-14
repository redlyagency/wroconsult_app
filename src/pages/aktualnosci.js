import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/base/layout"

import {
  PageWrapper,
  BlogCardWrapper,
  BlogCardElement,
  ThumbnailImage,
  ContentInlineWrapper,
  PreContentParagraph,
  ReadMoreParagraph,
  BlogTitleHeader,
  BlogDateParagraph,
} from "../styles/aktualnosci.style"

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
        <BlogCardWrapper>
            {articles.map(({node}) => {
                return (
                    <div key={node.slug}>
                        <a href={"/aktualnosci/" + node.slug}>
                            <BlogCardElement>
                              <ThumbnailImage
                                src={node.thumbnailPhoto.fluid.src}
                                srcSet={node.thumbnailPhoto.fluid.srcSet}
                              />
                              <ContentInlineWrapper>
                                <BlogTitleHeader>{node.title}</BlogTitleHeader>
                                <PreContentParagraph dangerouslySetInnerHTML={{ __html: node.content }}/>
                                <BlogDateParagraph>{node.date}</BlogDateParagraph>
                              </ContentInlineWrapper>
                              <ReadMoreParagraph>Czytaj więcej <span style={{color: '#BF1E2D', fontSize: '11px'}}>&#10148;</span></ReadMoreParagraph>
                            </BlogCardElement>
                        </a>
                    </div>
                )
            })}
        </BlogCardWrapper>
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
    query {
        allDatoCmsArticle {
            edges {
                node {
                  id
                  thumbnailPhoto {
                    fluid {
                      ...GatsbyDatoCmsFluid
                    }
                  }
                  title
                  slug
                  content
                  date
                }
            }
        }
    }
`

export default NaszeProjektyPage