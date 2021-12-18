import React from "react"
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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

import { Headers } from "../utils/data/headersData"
import H1 from "../components/headers/h1"

const AktualnosciPage = ({ data }) => {

  const articles = data.allContentfulArtykul.edges
  const post = this.props.data.allContentfulArtykul.edges[0].node.content

  const option = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
            return <img/>
        },
        [BLOCKS.HEADING_1]: (node, children) => {
            return <p style={{padding: '0', margin: '0', display: 'inline-block'}}>{children}</p>
        },
        [BLOCKS.HEADING_5]: (node, children) => {
            return <p style={{padding: '0', margin: '0', display: 'inline-block'}}>{children}</p>
        },
        [BLOCKS.PARAGRAPH]: (node, children) => {
            return <p style={{padding: '0', margin: '0', display: 'inline-block'}}>{children}</p>
        },
        [BLOCKS.QUOTE]: (node, children) => {
            return <p style={{padding: '0', margin: '0', display: 'inline-block'}}>{children}</p>
        },
        [BLOCKS.UL_LIST]: (node, children) => {
            return <p style={{padding: '0', margin: '0', display: 'inline-block'}}>{children}</p>
        },
        [BLOCKS.LIST_ITEM]: (node, children) => {
            return <p style={{padding: '0', margin: '0', display: 'inline-block'}}>{children}</p>
        },
    },
    renderMark: {
        [MARKS.BOLD]: (node, children) => {
            return <p style={{fontWeight: '100'}}>{children}</p>
        },
    }
  }

  const output = renderRichText(post, option)

  return (
    <Layout>
      <PageWrapper>
        <H1 name={ Headers.Aktualnosci }/>
        <BlogCardWrapper>
            {articles.reverse().map(({node}) => {
                return (
                  <div key={node.slug}>
                    <a href={"/aktualnosci/" + node.slug}>
                      <BlogCardElement>
                        <ThumbnailImage
                          className="j10_dfg4gvBDG"
                          src={node.thumbnailPhoto.fluid.src}
                          srcSet={node.thumbnailPhoto.fluid.srcSet}
                        />
                        <ContentInlineWrapper>
                          <BlogTitleHeader>{node.title}</BlogTitleHeader>
                          <PreContentParagraph>{output}</PreContentParagraph>
                          <BlogDateParagraph>{node.createdAt}</BlogDateParagraph>
                        </ContentInlineWrapper>
                        <ReadMoreParagraph className="j5_dfg4gvBDG">Czytaj więcej <span style={{color: '#BF1E2D', fontSize: '11px'}}>&#10148;</span></ReadMoreParagraph>
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
      allContentfulArtykul {
        edges {
          node {
            id
            thumbnailPhoto {
              fluid {
                src
                srcSet
              }
            }
            title
            slug
            content {
              raw
              references {
                ... on ContentfulAsset {
                  __typename
                  contentful_id
                  fixed(width: 200) {
                    src
                    srcSet
                  }
                }
              }
            }
            createdAt(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
`

export default AktualnosciPage