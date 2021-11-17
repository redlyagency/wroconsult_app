import styled from "styled-components"

export const BackBtnWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: row;

    @media (max-width: 520px) {
        justify-content: center;
    }
`
export const BackBtn = styled.button`
    background-color: #BF1E2D;
    border: 2px solid #BF1E2D;
    display: flex;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 17px;
    padding: 10px;
    width: 10%;
    justify-content: center;
    margin-left: 10px;
    border-radius: 10px;
    color: white;

    :hover {
        transition: 0.2s;
        background-color: #ffffff;
        color: #BF1E2D;
        font-weight: 700;
    }

    @media (max-width: 1535px) {
        width: 12%;
    }
    @media (max-width: 1279px) {
        width: 14%;
    }
    @media (max-width: 1023px) {
        width: 20%;
    }
    @media (max-width: 767px) {
        width: 30%;
    }
    @media (max-width: 520px) {
        width: 40%;
        margin-left: 0;
    }
`