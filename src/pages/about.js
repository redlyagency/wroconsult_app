import React from 'react';
import { graphql } from 'gatsby';

const AboutPage = ({ data }) => {
    const articles = data.allDatoCmsArticle.edges
    return (
        <div>
            <h1>About page</h1>
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

export default AboutPage