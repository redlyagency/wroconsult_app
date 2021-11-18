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
export const IframeGoogleMaps = styled.iframe`
    border: 0;
    height: 450px;
    width: 450px;
    padding: 10px;

    @media (max-width: 500px) {
        height: 300px;
        width: 300px;
    }
`
export const IframeGoogleMapsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContactBlockWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #efefef81;
    border-radius: 15px;

    @media (max-width: 1279px) {
        background-color: transparent;
    }
`
export const ContactBlockWrapper2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e6e6e688;
    border-radius: 15px;
    
    @media (max-width: 1279px) {
        background-color: transparent;
    }
`
export const ContactBlockWrapper3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #efefef81;
    border-radius: 15px;

    @media (max-width: 1279px) {
        background-color: transparent;
    }
`