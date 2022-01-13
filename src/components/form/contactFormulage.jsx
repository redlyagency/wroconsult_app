import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import {
    ContactFormulageWrapper,
    H2,

} from "./contactFormulage.style"

const Form = styled.form`
    margin-top: 50px;

`
const Field = styled.div`
    position: relative;
`
const Input = styled.input`
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
const Label = styled.label`
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
const LabelTextarea = styled.label`
    position: absolute;
    left: 10px;
    top: 14px;
    color: #BF1E2D;
    font-weight: 600;
    font-style: italic;
    font-size: 14px;
`
const Textarea = styled.textarea`
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
const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 50%;
`
const RightCol = styled.div`
    height: 200px;
    width: 50%;
`
const Button = styled.button`
    background-color: #BF1E2D;
    border: 2px solid #BF1E2D;
    width: 100%;
    height: 50px;
    color: white;
    font-weight: 500;
    border-radius: 10px;
    margin-top: 25px;

    :hover {
        transition: 0.2s;
        background-color: transparent;
        color: #BF1E2D;
    }
`
const FormFlexWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const ContactFormulage = () => {
    return(
        <ContactFormulageWrapper>
            <H2>Skontaktuj się z nami poprzez formularz kontaktowy</H2>
            <Formik>
                {({

                }) => (
                    <Form>
                        <FormFlexWrapper>
                            <LeftCol>
                                {/* email field */}
                                <Field>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder=" "
                                    />
                                    <Label for="email">Adres Email</Label>
                                </Field>
                                {/* name field */}
                                <Field>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder=" "
                                    />
                                    <Label for="name">Nazwa Podmiotu</Label>
                                </Field>
                            </LeftCol>
                            {/* message field */}
                            <RightCol>
                                <Field>
                                    <Textarea
                                        name="message"
                                        id="message"
                                        placeholder=" "
                                    />
                                    <LabelTextarea for="message">Treść wiadomości</LabelTextarea>
                                </Field>
                            </RightCol>
                        </FormFlexWrapper>
                        {/* submit button */}
                        <Button>Wyślij</Button>
                    </Form>
                )}
            </Formik>
        </ContactFormulageWrapper>
    )
}

export default ContactFormulage