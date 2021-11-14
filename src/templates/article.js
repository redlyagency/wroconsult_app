import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/base/layout'
import H1 from '../components/headers/h1'

const Article = ({ pageContext: { slug }, data: { article }}) => {
    return (
        <Layout>
            <H1
                name={article.title}
            />

            <div dangerouslySetInnerHTML={{ __html: article.content }} />
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
        }
    }
`

export default Article