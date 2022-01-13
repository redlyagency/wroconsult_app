import React from "react"
import styled from "styled-components"

import { ContactPageData } from "../../utils/data/kontaktPageData"

const ContactParagraphWrapper = styled.div`
    padding-left: 45px;

    @media (max-width: 1023px) {
        padding: 25px 0 25px 0;
    }
`
const H1 = styled.h1`
    font-size: 40px;
    color: #BF1E2D;
    font-weight: 700;
    font-style: italic;
    font-family: 'Poppins';

    @media (max-width: 1023px) {
        text-align: center;
    }
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