import React from "react"
import styled from "styled-components"

import { FooterData } from "../../utils/data/layoutData"

const FooterWrapper = styled.footer`
    position: fixed;
    left: -75px;
    bottom: 300px;
    transform: rotate(90deg);
    color: #76777A;
    opacity: 0.75;
    font-size: 15px;
    font-family: 'Poppins-Regular';

    @media (max-width: 1023px) {
        left: -80px;
        font-size: 13px;
    }
    @media (max-width: 645px) {
        left: -83px;
        font-size: 13px;
    }
`

const Footer = () => {
    return (
        <FooterWrapper>
            { FooterData.Title }
        </FooterWrapper>
    )
}

export default Footer