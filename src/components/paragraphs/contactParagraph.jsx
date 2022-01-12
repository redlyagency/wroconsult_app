import React from "react"
import styled from "styled-components"

import { ContactPageData } from "../../utils/data/kontaktPageData"

const ContactParagraphWrapper = styled.div`
    padding-left: 45px;
`
const H1 = styled.h1`
    font-size: 40px;
    color: #BF1E2D;
    font-weight: 700;
    font-style: italic;
    font-family: 'Poppins';
`

class ContactParagraph extends React.Component {
    render() {
        return(
            <ContactParagraphWrapper>
                <H1>Odwiedź nas</H1>
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