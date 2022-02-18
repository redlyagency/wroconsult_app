import React from 'react'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from '../components/base/layout'
import H1 from '../components/headers/h1'

import {
    PageWrapper,
    ArticleBodyWrapper,
    ArticleBody,
    DateParagraph,
    HeaderBannerCover,
    HeaderBannerCoverBlurEffect,
    QuoteBlock,
    HyperlinkBlock,
    ImgBlockArticleWrapper,
    ImgBlockArticle,
} from "../styles/article.style"

const Article = ({ data }) => {
    const post = data.contentfulArtykul.content
    const option = {
        renderNode: {
            [BLOCKS.DOCUMENT]: (node, children) => {
                return <div>{children}</div>
            },
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <div>{children}</div>
            },
            [BLOCKS.HEADING_1]: (node, children) => {
                return <div style={{ fontSize: '35px', fontWeight: '700' }}>{children}</div>
            },
            [BLOCKS.HEADING_2]: (node, children) => {
                return <div style={{ fontSize: '30px', fontWeight: '500' }}>{children}</div>
            },
            [BLOCKS.HEADING_3]: (node, children) => {
                return <div style={{ fontSize: '25px' }}>{children}</div>
            },
            [BLOCKS.HEADING_4]: (node, children) => {
                return <div style={{ fontSize: '20px' }}>{children}</div>
            },
            [BLOCKS.HEADING_5]: (node, children) => {
                return <div style={{ fontSize: '20px' }}>{children}</div>
            },
            [BLOCKS.HEADING_6]: (node, children) => {
                return <div style={{ fontSize: '14px' }}>{children}</div>
            },
            [BLOCKS.UL_LIST]: (node, children) => {
                return <ul style={{ listStyleType: 'disc' }}>{children}</ul>
            },
            [BLOCKS.OL_LIST]: (node, children) => {
                return <ol style={{ listStyleType: 'decimal' }}>{children}</ol>
            },
            [BLOCKS.LIST_ITEM]: (node, children) => {
                return <li style={{ marginLeft: '25px' }}>{children}</li>
            },
            [BLOCKS.QUOTE]: (node, children) => {
                return <QuoteBlock>{children}</QuoteBlock>
            },
            [BLOCKS.HR]: (node, children) => {
                return <div>{children}</div>
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                return <div>{children}</div>
            },
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                return <ImgBlockArticleWrapper><ImgBlockArticle src={node.data.target.fixed.src} srcSet={node.data.target.fixed.srcSet} sizes="3x"/></ImgBlockArticleWrapper>
            },
            [INLINES.EMBEDDED_ENTRY]: (node, children) => {
                return <div>{children}</div>
            },
            [INLINES.HYPERLINK]: ({ data }, children) => {
                return <HyperlinkBlock href={data.uri} target={`${data.uri ? '_self' : '_blank'}`} rel={`${data.uri ? '' : 'noopener noreferrer'}`}>{children}</HyperlinkBlock>
            },
            [INLINES.ENTRY_HYPERLINK]: (node, children) => {
                return <div>{children}</div>
            },
            [INLINES.ASSET_HYPERLINK]: (node, children) => {
                return <div>{children}</div>
            },
        },
        renderMark: {
            [MARKS.BOLD]: (text, key) => <strong key={key}>{text}</strong>,
            [MARKS.ITALIC]: (text, key) => <em key={key}>{text}</em>,
            [MARKS.UNDERLINE]: (text, key) => <u key={key}>{text}</u>,
            [MARKS.CODE]: (text, key) => <code key={key}>{text}</code>,
        }
    }
    return (
        <Layout>
            <PageWrapper>
                <div style={{ position: 'relative', zIndex: '1'}}>
                    <HeaderBannerCoverBlurEffect />
                    <HeaderBannerCover dataImg={data.contentfulArtykul.thumbnailPhoto.fluid.src} />
                    <H1 position='relative' zIndex='100' name={data.contentfulArtykul.title}/>
                    <DateParagraph>{data.contentfulArtykul.createdAt}</DateParagraph>
                </div>
                <ArticleBodyWrapper>
                    <ArticleBody className="gfrw_df463V">
                        {renderRichText(post, option)}
                    </ArticleBody>
                </ArticleBodyWrapper>
            </PageWrapper>
        </Layout>
    )
}

export const query = graphql`
    query ($slug: String!) {
        contentfulArtykul(slug: { eq: $slug }) {
            id
            slug
            title
            thumbnailPhoto {
                fluid {
                    src
                }
            }
            content {
                raw
                references {
                ... on ContentfulAsset {
                    __typename
                    contentful_id
                        fixed(width: 1700) {
                            src
                            srcSet
                        }
                    }
                }
            }
            createdAt(formatString: "YYYY-MM-DD")
        }
    }
`

export default Article