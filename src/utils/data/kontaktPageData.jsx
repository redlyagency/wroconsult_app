import React from "react"
import styled from "styled-components"

const P = styled.p`
    color: #76777A;
    font-size: 26px;
    font-weight: 700;
    font-style: italic;
    font-family: 'Poppins';
    padding: 30px 0 5px 0;

    @media (max-width: 1023px) {
        text-align: center;
    }
`
const A = styled.a`
    color: #BF1E2D;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    font-family: 'Poppins';

    @media (max-width: 1023px) {
        text-align: center;
        display: flex;
        justify-content: center;
    }
`

export const ContactPageData = [
    {
        header: <P>Adres siedziby</P>,
        content: <A href="https://www.google.com/maps?ll=51.167407,16.92236&z=18&t=m&hl=pl&gl=PL&mapclient=embed&q=Siedlecka+26+54-101+Wroc%C5%82aw">Wrocław - Maślice<br />54-101<br />ul. Siedlecka 26</A>
    },
    {
        header: <P>Adres e-mailowy</P>,
        content: <A href='mailto:biuro@wroconsult.pl'>biuro@wroconsult.pl</A>
    },
    {
        header: <P>Numery telefonów</P>,
        content: <A href="tel:+48605231112">605-23-11-12</A>
    },
]