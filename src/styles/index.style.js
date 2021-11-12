import styled from "styled-components"

import BgLine from "../assets/svg/bg_line.svg"
import bgImage from "../assets/img/heroBgImage.png"

export const PageWrapper = styled.div`
    width: 100%;
    margin-top: 35px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65vh;

    @media (max-width: 1023px) {
        margin-top: 20px;
        height: 70vh;
    }
`
export const HeroContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    background-image: url( ${ BgLine } );
`
export const StyledMainHeaderHero = styled.div`
    text-align: right;
    line-height: 80px;
    font-size: 80px;

    @media (max-width: 1535px) {
    line-height: 70px;
    font-size: 65px;
    }
    @media (max-width: 1279px) {
    line-height: 65px;
    font-size: 60px;
    }
    @media (max-width: 767px) {
    line-height: 55px;
    font-size: 50px;
    }
    @media (max-width: 600px) {
    line-height: 50px;
    font-size: 45px;
    }
    @media (max-width: 500px) {
    line-height: 45px;
    font-size: 40px;
    }
    @media (max-width: 450px) {
    line-height: 35px;
    font-size: 30px;
    }
    @media (max-width: 350px) {
    line-height: 30px;
    font-size: 25px;
    }
`
export const StyledUnderMainHeaderHero = styled.div`
    text-align: right;
    font-size: 20px;
    padding: 5px 0 15px 0;

    @media (max-width: 1535px) {
    font-size: 17.5px;
    }
    @media (max-width: 1279px) {
    font-size: 17px;
    }
    @media (max-width: 600px) {
    font-size: 12px;
    }
    @media (max-width: 500px) {
    font-size: 11px;
    }
`
export const ImageHeroRightSideComponentWrapper = styled.div`
    width: 35%;
    height: 99vh;
    margin-left: 50px;
    background-color: white;
`
export const ImageHeroRightSideComponentIMAGEWRAPPER = styled.div`
    position: absolute;
    height: 100%;
    width: 40vw;
    top: 0;
    right: 0;
`
export const ImageHeroRightSideComponent = styled.div`
    background-image: url( ${ bgImage } );
    background-size: cover;
    background-position: right;
    opacity: 0.2;
    height: 100%;
    height: 100%;
`