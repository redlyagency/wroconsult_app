import React from "react"
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

class RichTextComponent extends React.Component {
    render() {
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
        
        return <div>{output}</div>
    }
}

export default RichTextComponent