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
export const BlogCardWrapper = styled.div`
    margin-top: 50px;
`
export const BlogCardElement = styled.div`
    background-color: white;
    width: 60%;
    margin-top: 25px;
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

    @media (max-width: 1535px) {
        width: 70%;
    }
    @media (max-width: 1279px) {
        width: 90%;
    } 
    @media (max-width: 1023px) {
        width: 100%;
    }
    @media (max-width: 475px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
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
export const ThumbnailImage = styled.img`
    width: 170px;
    height: 90px;
    object-fit: cover;
    border-radius: 10px;
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
export const ReadMoreParagraph = styled.p`
    font-size: 13px;
    color: #707070;

    @media (max-width: 645px) {
        display: none;
    } 
`
export const BlogTitleHeader = styled.h2`
    color: #BF1E2D;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 16px;
`
export const BlogDateParagraph = styled.p`
    font-size: 13px;
    color: #BF1E2D;
    font-family: 'Poppins';
`