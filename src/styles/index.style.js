import styled from "styled-components"
import { Link } from "gatsby"

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

    @media (max-width: 900px) {
        flex-direction: column;
    }
`
export const LeftSide = styled.div`
    background-size: 90%;
    background-position: center;
    background-repeat: no-repeat;
    width: 50vw;
    height: 100vh;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1023px) {
        width: 100vw;
        height: 50vh;
    }
    @media (max-width: 900px) {
        justify-content: flex-end;
        padding-bottom: 25px;
    }
    @media (max-width: 420px) {
        padding-bottom: 50px;
    }
`
export const RightSide = styled.div`
    background-image: url( ${ bgImage } );
    background-size: cover;
    width: 50vw;
    height: 100vh;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1023px) {
        width: 100vw;
        height: 50vh;
        background-image: none;
    }
    @media (max-width: 900px) {
        justify-content: center;
        align-items: flex-start;
        padding-top: 25px;
    }
    @media (max-width: 420px) {
        padding-top: 5px;
    }
`
export const StyledMainHeaderHero = styled.div`
    text-align: right;
    font-size: 70px;
    line-height: 65px;

    @media (max-width: 1279px) {
        font-size: 55px;
        line-height: 60px;
    }
    @media (max-width: 1023px) {
        font-size: 50px;
        line-height: 55px;
    }
    @media (max-width: 900px) {
        text-align: center;
    }
    @media (max-width: 595px) {
        font-size: 45px;
        line-height: 50px;
    }
    @media (max-width: 420px) {
        font-size: 40px;
        line-height: 45px;
    }
    @media (max-width: 420px) {
        font-size: 35px;
        line-height: 40px;
    }
`
export const StyledUnderMainHeaderHero = styled.div`
    text-align: right;
    font-size: 20px;
    line-height: 25px;
    width: 600px;
    margin-top: 15px;

    @media (max-width: 1279px) {
        font-size: 17px;
        line-height: 23px;
        width: 450px;
    }
    @media (max-width: 1023px) {
        font-size: 15px;
        line-height: 20px;
        width: 400px;
    }
    @media (max-width: 900px) {
        text-align: center;
        width: 60%;
    }
    @media (max-width: 595px) {
        width: 90%;
    }
    @media (max-width: 420px) {
        width: 95%;
        font-size: 13px;
        line-height: 18px;
    }
    @media (max-width: 370px) {
        font-size: 12px;
        line-height: 15px;
    }
`
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 95%;

    @media (max-width: 900px) {
        margin-top: 20px;
        width: 100%;
        align-items: center;
    }
    @media (max-width: 595px) {
        margin-top: -20px;
    }
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

export const IndexLatestArticlesBannerWrapper = styled.div`
    background-color: white;
    width: 465px;
    height: 500px;
    margin-left: 25px;
    border-radius: 15px;
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.15);
    padding: 15px;

    @media (max-width: 1023px) {
        width: 400px;
    }
    @media (max-width: 900px) {
        margin-left: 0;
        height: 350px;
    }
    @media (max-width: 420px) {
        width: 100%;
        border-radius: 0;
    }
`
export const Header = styled.h6`
    color: #76777A;
    font-size: 18px;
    font-family: 'Poppins';
    font-weight: 500;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    width: 225px;
    text-align: center;
    margin: -35px 0 0 10px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
`
export const ArticleScrollSection = styled.div`
    background-color: white;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 90%;
    margin-top: 20px;
    width: 100%;
    position: relative;
`
export const BlogCardElement = styled.div`
    background-color: white;
    width: 95%;
    margin-top: 15px;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 3px 15px #00000029;

    :hover {
        transition: 0.2s;
        transform: scale(1.003) translateX(-50%);
    }
    :hover > .j5_dfg4gvBDG {
        transition: 0.2s;
        color: #BF1E2D;
    }
    :hover > .j10_dfg4gvBDG {
        transition: 0.2s;
        opacity: 0.8;
    }

    @media (max-width: 1023px) {
        width: 95%;
    }
    @media (max-width: 475px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    } 
`
export const ThumbnailImage = styled.img`
    width: 170px;
    min-width: 140px;
    height: 90px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 1023px) {
        min-width: 100px;
    }
`
export const ContentInlineWrapper = styled.div`
    width: 500px;
    margin-left: 25px;
    
    @media (max-width: 1023px) {
        width: 350px;
        margin-left: 15px;
    }
    @media (max-width: 767px) {
        width: 250px;
    }
    @media (max-width: 475px) {
        margin-left: 0;
        width: 100%;
        margin-top: 15px;
    } 
`
export const BlogTitleHeader = styled.h2`
    color: #BF1E2D;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 16px;
    height: 50px;
    overflow:hidden;
    text-overflow: ellipsis !important;
`
export const PreContentParagraph = styled.div`
    overflow:hidden;
    text-overflow: ellipsis !important;
    width: 100%;
    height: 40px;
    color: #707070;
    font-family: 'Poppins';
    font-size: 13px;
`
export const BlogDateParagraph = styled.p`
    font-size: 13px;
    color: #BF1E2D;
    font-family: 'Poppins';
`
export const ShowMoreBtn = styled(Link)`
    color: white;
    font-size: 14px;
    font-family: 'Poppins';
    font-weight: 400;
    background-color: #BF1E2D;
    padding: 10px;
    border-radius: 10px;
    width: 225px;
    text-align: center;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);

    :hover {
        background-color: transparent;
        color: #BF1E2D;
    }
`
export const ShowMoreBtnWrapper = styled.div`
    height: 50px;
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TopScrollGradient = styled.div`
    width: 100%;
    height: 50px;
    background: rgb(255,255,255);
    background: linear-gradient(-180deg, rgba(255,255,255,1) 2%, rgba(255,0,0,0) 100%);
    position: sticky;
    top: 0;
    z-index: 500;
`
export const BottomScrollGradient = styled.div`
    width: 100%;
    height: 50px;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 2%, rgba(255,0,0,0) 100%);
    position: sticky;
    bottom: -2px;
    z-index: 500;
`