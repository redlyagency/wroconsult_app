import styled from "styled-components"

import BgLine from "../assets/svg/bg_line.svg"

export const PageWrapper = styled.div`
    background-image: url( ${ BgLine } );
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: flex;

    @media (max-width: 1023px) {
    margin-top: 20px;
    }
`
export const LeftSidePage = styled.div`
    height: 100vh;
    width: 55vw;
    padding: 170px 0 170px 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const CenterSidePage = styled.div`
    height: 100vh;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const RightSidePage = styled.div`
    background-color: #F3F3F3;
    height: 100vh;
    width: 35vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const LeftSideInnerContainer = styled.div`

`
export const OrParagraph = styled.p`
    color: #BF1E2D;
    font-size: 23px;
    font-weight: 700;
    font-style: italic;
`