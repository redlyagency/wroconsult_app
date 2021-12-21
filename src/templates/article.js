import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/base/layout'
import H1 from '../components/headers/h1'
import BackBtnComponent from '../components/buttons/backBtn'

import {
    PageWrapper,
    ArticleBodyWrapper,
    ArticleBody,
    DateParagraph,
} from "../styles/article.style"

const Article = ({ data }) => {
    

    return (
        <Layout>
            <PageWrapper>
                <H1 name={data.contentfulArtykul.title}/>
                <DateParagraph>{data.contentfulArtykul.createdAt}</DateParagraph>
                <ArticleBodyWrapper>
                    {/*<ArticleBody className="gfrw_df463V" dangerouslySetInnerHTML={{ __html: data.contentfulArtykul. }} />*/}
                </ArticleBodyWrapper>
                <BackBtnComponent />
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
            content {
                raw
                references {
                    fixed {
                        src
                    }
                }
            }
            createdAt(formatString: "YYYY-MM-DD")
        }
    }
`

export default Article