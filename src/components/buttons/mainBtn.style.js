import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MainBtnWrapper = styled.nav`
    margin-top: 25px;
`
export const RightSideButtonElementMobile = styled(AniLink)`
    padding: 7px 25px 7px 25px;
    font-size: 20px;
    color: white;
    font-family: 'Poppins';
    border-radius: 5px;
    border: 2px #BF1E2D solid;
    background-color: #BF1E2D;
    transition: 0.2s;

    :hover {
        background-color: transparent;
        color: #BF1E2D;
    }

    @media (max-width: 1023px) {
        font-size: 15px;
    }
`