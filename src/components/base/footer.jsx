import React from "react"
import styled from "styled-components"

import { FooterData } from "../../utils/data/layoutData"

const FooterWrapper = styled.footer`
    color: #76777A;
    width: 100%;
    padding: 25px;
`

class Footer extends React.Component {
    render() {
        return (
            <>
                <FooterWrapper>
                    { FooterData.Title }
                </FooterWrapper>
            </>
        )
    }
}

export default Footer