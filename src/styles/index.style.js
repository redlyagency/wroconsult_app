import styled from "styled-components"

import BgLine from "../assets/svg/bg_line.svg"
import bgImage from "../assets/img/heroBgImage.webp"

export const PageWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1023px) {
        flex-direction: column;
    }
`
export const LeftSide = styled.div`
    background-image: url( ${ BgLine } );
    background-size: 90%;
    background-position: center;
    background-repeat: no-repeat;
    width: 60vw;
    height: 100vh;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1023px) {
        align-items: baseline;
        justify-content: end;
        margin-bottom: 25px;
        width: 100vw;
    }
`
export const RightSide = styled.div`
    background-image: url( ${ bgImage } );
    background-size: cover;
    opacity: 0.25;
    width: 40vw;
    height: 100vh;

    @media (max-width: 1023px) {
        width: 100vw;
        height: 50vh;
    }
`
export const StyledMainHeaderHero = styled.h1`
    text-align: right;
    font-size: 65px;
    line-height: 60px;

    @media (min-width: 1850px) {
        font-size: 75px;
        line-height: 75px;
    }
    @media (max-width: 700px) {
        font-size: 55px;
        line-height: 50px;
    }
    @media (max-width: 550px) {
        font-size: 45px;
        line-height: 40px;
    }
    @media (max-width: 420px) {
        font-size: 40px;
        line-height: 35px;
    }
    @media (max-width: 360px) {
        font-size: 34px;
        line-height: 32px;
    }
`
export const StyledUnderMainHeaderHero = styled.h2`
    text-align: right;
    font-size: 17px;
    line-height: 20px;
    width: 70%;

    @media (min-width: 1850px) {
        font-size: 20px;
        line-height: 25px;
        width: 800px;
    }
    @media (max-width: 550px) {
        font-size: 15px;
        line-height: 20px;
    }
    @media (max-width: 420px) {
        font-size: 13px;
        line-height: 15px;
    }
    @media (max-width: 360px) {
        font-size: 12px;
        line-height: 13px;
    }
`
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 95%;
`
export const FooterWrapper = styled.footer`
    color: #76777A;
    width: 100%;
    padding: 25px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
`