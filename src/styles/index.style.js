import styled from "styled-components"

import BgLine from "../assets/svg/bg_line.svg"

export const PageWrapper = styled.div`
    background-image: url( ${ BgLine } );
    width: 100%;
    height: 70vh;
    margin-top: 35px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1023px) {
    margin-top: 20px;
    }
`
export const HeroContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`
export const StyledMainHeaderHero = styled.div`
    line-height: 75px;
    font-size: 70px;

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
    width: 90%;
    float: right;
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
export const StyledMarkSliderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1023px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const SliderElement = styled.div`
    width: 700px;
    height: 100px;
    margin-left: 15px;
    z-index: 1;

    @media (max-width: 1279px) {
        width: 600px;
    }
    @media (max-width: 1023px) {
        width: 500px;
    }
    @media (max-width: 767px) {
        width: 400px;
    }
    @media (max-width: 600px) {
        width: 350px;
    }
    @media (max-width: 500px) {
        width: 300px;
    }
    @media (max-width: 450px) {
        width: 250px;
        margin-left: 0;
    }
    @media (max-width: 350px) {
        width: 200px;
        margin-left: 15px;
    }
`
export const CookieConsentWrapper = styled.div`
    position: fixed;
`