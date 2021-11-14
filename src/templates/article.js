import React from 'react'
import { graphql } from 'gatsby'

const Article = ({ pageContext: { slug }, data: { article }}) => {
    return (
        <div>
            <h1>{article.title}</h1>

            <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
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