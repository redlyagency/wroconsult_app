import styled from "styled-components"

export const PageWrapper = styled.div`
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
    padding-top: 10px;
    position: relative;
    z-index: 100;
    padding-top: 15px;
`
export const HeaderBannerCover = styled.div`
    background-image: url(${({ dataImg }) => dataImg});
    filter: brightness(200%);
    opacity: 0.5;
    position: absolute;
    z-index: 50;
    left: -25px;
    top: -25px;
    width: calc( 100% + 50px );
    height: calc( 100% + 50px );
    border-radius: 10px;

    @media (max-width: 787px) {
        border-radius: 0;
    }
`
export const HeaderBannerCoverBlurEffect = styled.div`
    backdrop-filter: blur(50px);
    position: absolute;
    z-index: 55;
    left: -25px;
    top: -25px;
    width: calc( 100% + 50px );
    height: calc( 100% + 50px );
    border-radius: 10px;

    @media (max-width: 787px) {
        border-radius: 0;
    }
`
export const QuoteBlock = styled.div`
    margin: 25px;
    color: #6e6e6e;
    position: relative;

    :before {
        content: '';
        background-color: #b5b5b5;
        height: 100%;
        width: 3px;
        position: absolute;
        left: -15px;
        top: 0;
    }
`
export const HyperlinkBlock = styled.a`
    padding: 5px;
    position: relative;
    transition: ease-in-out !important;
    text-decoration: none;

    ::after {
        content: '';
        background-color: #bf1e2e6a;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 5%;
        width: 100%;
        transition: ease-in-out !important;
        z-index: -1;
    }
    :hover::after {
        height: 100%;
        transition: 0.2s ease-in-out !important;
    }
    :hover {
        transition: 0.2s ease-in-out !important;
    }
`
export const ImgBlockArticleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
`
export const ImgBlockArticle = styled.div`
    border-radius: 15px;
    background-image: ${props => `url(${props.src})`};
    background-size: cover;
    width: 90%;
    height: 500px;

    @media (max-width: 1535px) {
        height: 400px;
    }
    @media (max-width: 1279px) {
        height: 350px;
    }
    @media (max-width: 767px) {
        height: 300px;
    }
    @media (max-width: 650px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        height: 250px;
    }
    @media (max-width: 500px) {
        height: 200px;
    }
`