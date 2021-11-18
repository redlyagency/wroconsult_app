import React from "react"
import styled from "styled-components"

import { ContactPageData } from "../../utils/data/kontaktPageData"

const ContactParagraphWrapper = styled.div`

`

class ContactParagraph extends React.Component {
    render() {
        return(
            <ContactParagraphWrapper
                className="grid muchSmall:grid-cols-1 gap-4 grid-cols-2"
            >
                {ContactPageData.map((value, index) => {
                    return (
                        <div
                            key={index}
                        >
                            <h1>{value.header}</h1>
                            <p>{value.content}</p>
                        </div>
                    )
                })}
            </ContactParagraphWrapper>
        )
    }
}

export default ContactParagraph