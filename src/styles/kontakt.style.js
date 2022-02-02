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
        flex-direction: column;
    }
`
export const LeftSidePage = styled.div`
    height: 100vh;
    width: 50vw;
    padding: 170px 0 170px 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1023px) {
        width: 100vw;
        padding: 115px 10px 0 10px;
        justify-content: center;
    }
`
export const CenterSidePage = styled.div`
    height: 100vh;
    width: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1023px) {
        width: 100vw;
        padding: 25px 0 25px 0;
    }
`
export const RightSidePage = styled.div`
    background-color: #F3F3F3;
    height: 100vh;
    width: 35vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1023px) {
        width: 100vw;
        justify-content: center;
    }
`
export const LeftSideInnerContainer = styled.div`

`
export const OrParagraph = styled.p`
    color: #BF1E2D;
    font-size: 23px;
    font-weight: 700;
    font-style: italic;
`
export const FooterWrapper = styled.footer`
    color: #76777A;
    width: 100%;
    padding: 25px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1023px) {
        position: static;
        transform: translateX(0);
        background-color: #F3F3F3;
    }
`