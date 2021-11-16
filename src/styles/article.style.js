import styled from "styled-components"

import BgLine from "../assets/svg/bg_line.svg"

export const PageWrapper = styled.div`
    background-image: url( ${ BgLine } );
    width: 100%;
    margin-top: 35px;
    padding: 20px;

    @media (max-width: 1023px) {
        margin-top: 20px;
    }
`
export const ArticleBodyWrapper = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: center;
    padding: 35px 0 35px 0;
`
export const ArticleBody = styled.div`
    width: 70%;

    @media (max-width: 1023px) {
        width: 100%;
    }
`
export const DateParagraph = styled.p`
    color: #BF1E2D;
    font-family: 'Poppins';
    font-weight: 700;
    
`