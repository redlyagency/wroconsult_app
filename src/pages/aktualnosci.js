import React from "react"
import { graphql } from 'gatsby'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
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
  return (
    <Layout>
      <PageWrapper>
        <H1 name={ Headers.Aktualnosci }/>
        <BlogCardWrapper>
          {articles.map(({node}) => {
            const post = node.content
            const option = {
              renderNode: {
                [BLOCKS.DOCUMENT]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.PARAGRAPH]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.HEADING_1]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.HEADING_2]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.HEADING_3]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.HEADING_4]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.HEADING_5]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.HEADING_6]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.UL_LIST]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.OL_LIST]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.LIST_ITEM]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.QUOTE]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.HR]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [INLINES.EMBEDDED_ENTRY]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [INLINES.HYPERLINK]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [INLINES.ENTRY_HYPERLINK]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
                [INLINES.ASSET_HYPERLINK]: (node, children) => {
                  return <div style={{display: 'inline-block'}}>{children}&nbsp;</div>
                },
              },
              renderMark: {
                [MARKS.BOLD]: (text, key) => <p key={key} style={{display: 'inline-block'}}>{text}&nbsp;</p>,
                [MARKS.ITALIC]: (text, key) => <p key={key} style={{display: 'inline-block'}}>{text}&nbsp;</p>,
                [MARKS.UNDERLINE]: (text, key) => <p key={key} style={{display: 'inline-block'}}>{text}&nbsp;</p>,
                [MARKS.CODE]: (text, key) => <p key={key} style={{display: 'inline-block'}}>{text}&nbsp;</p>,
            }
            }
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
                      <PreContentParagraph>
                        {renderRichText(post, option)}
                      </PreContentParagraph>
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
      allContentfulArtykul(sort: { fields: createdAt, order: DESC }) {
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