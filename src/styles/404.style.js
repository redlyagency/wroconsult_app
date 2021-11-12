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
    flex-direction: column;

    @media (max-width: 1023px) {
    margin-top: 20px;
    }
`
export const Page404Paragraph = styled.p`
    font-size: 60px !important;
    font-family: Poppins;
    font-weight: 600;
    color: #76777A;
    text-align: center;
    font-size: 60px;
    width: 60%;
    line-height: 75px;

    @media (max-width: 1023px) {
        font-size: 40px !important;
        line-height: 55px;
    }
    @media (max-width: 500px) {
        font-size: 30px !important;
        line-height: 45px;
    }
`