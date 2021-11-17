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

const Article = ({ pageContext: { slug }, data: { article }}) => {
    return (
        <Layout>
            <PageWrapper>
                <H1
                    name={article.title}
                />
                <DateParagraph>{article.date}</DateParagraph>
                <ArticleBodyWrapper>
                    <ArticleBody className="gfrw_df463V" dangerouslySetInnerHTML={{ __html: article.content }} />
                </ArticleBodyWrapper>
                <BackBtnComponent />
            </PageWrapper>
        </Layout>
    )
}

export const query = graphql`
    query fetchArticle($slug: String) {
        article: datoCmsArticle(slug: { eq: $slug }) {
            id,
            slug
            title
            content
            date
        }
    }
`

export default Article