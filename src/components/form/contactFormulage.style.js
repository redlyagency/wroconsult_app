import styled from "styled-components"

export const ContactFormulageWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px 25px 0 0;
`
export const H2 = styled.h2`
    color: #BF1E2D;
    font-size: 36px;
    font-weight: 700;
    font-style: italic;

    @media (max-width: 1279px) {
        font-size: 25px;
    }
`
export const Form = styled.form`
    margin-top: 50px;

`
export const Field = styled.div`
    position: relative;
`
export const Input = styled.input`
    background-color: transparent;
    touch-action: manipulation;
    transform-origin: left bottom;
    height: 50px;
    width: 100%;
    border-bottom: 2px solid #707070;
    padding-left: 10px;
    font-size: 16px;
    font-style: italic;
    color: #76777A;
    font-weight: 600;

    :focus {
        border-bottom: 2px solid #BF1E2D;
    }

    :placeholder-shown + label {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #BF1E2D;
        font-weight: 600;
        font-style: italic;
        font-size: 14px;
    }

    :not(:placeholder-shown) + label, :focus + label {
        position: absolute;
        left: 0;
        top: -5px;
        color: #BF1E2D;
        font-weight: 600;
        font-style: italic;
        font-size: 14px;
        pointer-events: none;
        transition: 0.2s;
        touch-action: manipulation;
        transform-origin: left bottom;
    }
`
export const Label = styled.label`
    position: absolute;
    left: 0;
    top: -15px;
    color: #BF1E2D;
    font-weight: 600;
    font-style: italic;
    font-size: 14px;
    pointer-events: none;
    transition: 0.2s;
    touch-action: manipulation;
    transform-origin: left bottom;
`
export const LabelTextarea = styled.label`
    position: absolute;
    left: 10px;
    top: 14px;
    color: #BF1E2D;
    font-weight: 600;
    font-style: italic;
    font-size: 14px;
`
export const Textarea = styled.textarea`
    background-color: transparent;
    resize: none;
    height: 200px;
    width: 100%;
    border-bottom: 2px solid #707070;
    padding: 10px;
    touch-action: manipulation;
    transform-origin: left bottom;
    font-size: 16px;
    font-style: italic;
    color: #76777A;
    font-weight: 600;

    :not(:placeholder-shown) + label, :focus + label {
        position: absolute;
        left: 0;
        top: -15px;
        color: #BF1E2D;
        font-weight: 600;
        font-style: italic;
        font-size: 14px;
        pointer-events: none;
        transition: 0.2s;
        touch-action: manipulation;
        transform-origin: left bottom;
    }
`
export const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 50%;
`
export const RightCol = styled.div`
    height: 200px;
    width: 50%;
`
export const Button = styled.button`
    background-color: #BF1E2D;
    border: 2px solid #BF1E2D;
    width: 100%;
    height: 50px;
    color: white;
    font-weight: 500;
    border-radius: 10px;
    margin-top: 30px;

    :hover {
        transition: 0.2s;
        background-color: transparent;
        color: #BF1E2D;
    }
`
export const FormFlexWrapper = styled.div`
    display: flex;
    gap: 10px;
`
export const ErrorAlert = styled.p`
    color: #BF1E2D;
    font-weight: 600;
    font-style: italic;
    font-size: 12px;
    margin: -35px 0 0 0;
    padding: 0;
`