import styled from "styled-components"

import BgLine from "../assets/svg/bg_line.svg"

export const PageWrapper = styled.div`
    background-image: url( ${ BgLine } );
    width: 100%;
    height: 70vh;
    margin-top: 35px;
    padding: 20px;

    @media (max-width: 1023px) {
        margin-top: 20px;
    }
    @media (max-width: 500px) {
        height: auto;
    }
`