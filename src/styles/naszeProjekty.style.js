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
export const OurProjectComponentTableWrapper = styled.div`
    margin-top: 35px;
`
export const TableStyled = styled.table`
    tr:nth-child(even) {
        background-color: rgba(230, 230, 230, 0.48);
    }
    @media (max-width: 1023px) {
        tr:nth-child(even) {
            background-color: transparent;
        }
    }
    tr:nth-child(odd) {
        background-color: transparent;
    }
    @media (max-width: 1023px) {
        tr:nth-child(odd) {
            background-color: rgba(230, 230, 230, 0.48);
        }
    }

    @media (max-width: 1023px) {
        display: block;
    }
`
export const TheadStyled = styled.thead`
    text-align: left;

    @media (max-width: 1023px) {
        display: none;
    }
`
export const TheadStyledText = styled.p`
    color: ${({isRed}) => isRed ? '#BF1E2D' : '#76777A'};
    font-size: 14px;
    padding: 15px;
`
export const TbodyStyled = styled.tbody`
    @media (max-width: 1023px) {
        display: block;
    }
`
export const TrStyled = styled.tr`
    font-size: 15px;

    @media (max-width: 1023px) {
        display: block;
        margin-top: 20px;
    }
    
    @media (max-width: 500px) {
        font-size: 14px;
    }
`
export const ThStyled = styled.th`
    background-color: ${({isRed}) => isRed ? 'rgba(190, 30, 46, 0.1)' : 'rgba(230, 230, 230, 0.48)'};
    width: ${({isRed}) => isRed ? '185px' : 'auto'};

    @media (max-width: 1023px) {
        display: block;
        background-color: transparent;
    }
`
export const TdStyled = styled.td`
    background-color: ${({isRed}) => isRed ? 'rgba(190, 30, 46, 0.1)' : 'transparent'};
    color: ${({isRed}) => isRed ? '#BF1E2D' : '#76777A'};
    padding: 25px;
    text-align: center;

    @media (max-width: 1023px) {
        :before {
            position: absolute;
            top: 0;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
            padding: 20px;
            font-weight: 700;
        }
    }

    :nth-of-type(1):before { content: "Nazwa projektu"; }
    :nth-of-type(2):before { content: "Odbiorca"; }
    :nth-of-type(3):before { content: "Wartość projektu"; }
    :nth-of-type(4):before { content: "Źródło finansowania"; }

    @media (min-width: 1023px) {
        :nth-of-type(1):before, :nth-of-type(2):before, :nth-of-type(3):before, :nth-of-type(4):before {
            display: none;
        }
    }

    @media (max-width: 1023px) {
        display: block;
        border: none;
        position: relative;
        padding-top: 50px;
        text-align: left;
    }
`