import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import {
    ContactFormulageWrapper,
    H2,

} from "./contactFormulage.style"


// const InputEmail = styled.input`
//     height: 50px;
//     width: 300px;
//     transition: 0.2s;
//     border-bottom: 2px solid #707070;
//     color: #76777A;
//     font-size: 17px;
//     font-weight: 600;
//     font-style: italic;
//     padding-left: 10px;
//     :focus {border-bottom: 2px solid #ff6575;}
//     :focus ~ .floating-text-email{
//         position: absolute;
//         top: -15px;
//         left: 0;
//         transition: 0.2s;
//         color: #ff6575;
//         font-size: 15px;
//         font-weight: 600;
//         font-style: italic;
//     }
//     :not(:focus):valid ~ .floating-text-email {
//         position: absolute;
//         top: 50%;
//         transform: translateY(-50%);
//         left: 10px;
//         transition: 0.2s;
//         color: #BF1E2D;
//         font-size: 15px;
//         font-weight: 600;
//         font-style: italic;
//     }
// `
// const SpanEmail = styled.span`
//     position: absolute;
//     top: -15px;
//     left: 0;
//     transition: 0.2s;
//     pointer-events: none;
//     color: #BF1E2D;
//     font-size: 15px;
//     font-weight: 600;
//     font-style: italic;
// `










const Input = styled.input`
    background-color: #bebebe;
    height: 50px;
    width: 300px;
    transition: 0.2s;
    border-bottom: 2px solid #707070;
    color: #76777A;
    font-size: 17px;
    font-weight: 600;
    font-style: italic;
    padding-left: 10px;

    :focus {border-bottom: 2px solid #ff6575;}
    :focus ~ .floating-text {
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.2s;
        color: #ff6575;
        font-size: 15px;
        font-weight: 600;
        font-style: italic;
    }
    :not(:focus):valid ~ .floating-text {
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.2s;
        color: #ff6575;
        font-size: 15px;
        font-weight: 600;
        font-style: italic;
    }
`
const Textarea = styled.textarea`

    :focus ~ .floating-text {
        margin-top: -15px;
    }
    :not(:focus):valid ~ .floating-text {
        margin-top: -15px;
    }
`
const Label = styled.label`
    position: absolute;
    inset: 50% 0 0 0;
    transform: translateY(-50%);
    transition: 0.2s;
    pointer-events: none;
    color: #BF1E2D;
    font-size: 15px;
    font-weight: 600;
    font-style: italic;
    left: 10px;
`




const ContactFormulage = () => {
    return(
        <ContactFormulageWrapper>
            <H2>Skontaktuj się z nami poprzez formularz kontaktowy</H2>
            <Formik

            >
                {({
                    handleSubmit,

                }) => (
                    <form
                        onSubmit={handleSubmit}
                        style={{padding: '50px 0 0 0'}}
                    >
                        {/* email field */}
                        <div style={{position: 'relative'}}>
                            <Input
                                type="email"
                                name="email"
                                required=""
                            />
                            <Label className="floating-text">
                                Adres Email
                            </Label>
                        </div>
                        {/* name field */}
                        <div style={{position: 'relative'}}>
                            <Input
                                type="text"
                                name="name"
                            />
                            <Label className="floating-text">
                                Nazwa Podmiotu lub imię Przedstawiciela
                            </Label>
                        </div>
                        {/* message field */}
                        <div style={{position: 'relative'}}>
                            <Textarea
                                type="text"
                                name="message"
                            />
                            <Label className="floating-text">
                                Treść wiadomości
                            </Label>
                        </div>
                        {/* submit button */}
                        <button>
                            Wyślij
                        </button>
                    </form>
                )}
            </Formik>
        </ContactFormulageWrapper>
    )
}

export default ContactFormulage