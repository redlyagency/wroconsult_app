import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import * as Yup from 'yup'

const H1 = styled.h1`
    font-size: 20px;
    width: 85%;
    text-align: center;
    font-weight: 700;
    color: #76777A;
`
const P = styled.p`
    font-size: 12px;
    width: 85%;
    text-align: center;
    font-weight: 700;
    color: #BF1E2D;
`
const Input = styled.input`
    width: 85%;
    padding: 12px 15px;
    border-radius: 10px;
    margin-top: 5px;
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.10);
`
const Textarea = styled.textarea`
    width: 85%;
    padding: 12px 15px;
    border-radius: 10px;
    margin-top: 5px;
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.10);
    resize: none;
    height: 150px;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80%;
`
const Button = styled.button`
    background-color: #BF1E2D;
    border: 2px solid #BF1E2D;
    color: white;
    padding: 8px 30px;
    border-radius: 5px;
    margin-top: 10px;
    font-weight: 500;

    :hover {
        transition: 0.2s;
        background-color: transparent;
        color: #BF1E2D;
    }
`
const ContactFormulageWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .required('To pole jest wymagane')
        .email('Niepoprawny adres email').required('To pole jest wymagane'),
    name: Yup.string()
        .required('To pole jest wymagane'),
    message: Yup.string()
        .required('To pole jest wymagane'),
})

const ContactFormulage = () => {
    return (
        <ContactFormulageWrapper>
            <H1>Skontaktuj się z nami poprzez formularz kontaktowy</H1>
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    message: ''
                }}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                            fullwidth
                        />
                        <P>{errors.email && touched.email && errors.email}</P>
                        <Input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder="Nazwa Podmiotu lub Imię Przedstawiciela"
                        />
                        <P>{errors.name && touched.name && errors.name}</P>
                        <Textarea
                            type="text"
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            placeholder="Treść wiadomości"
                        />
                        <P>{errors.message && touched.message && errors.message}</P>
                        <Button

                        >
                            Wyślij
                        </Button>
                    </Form>
                )}
            </Formik>
        </ContactFormulageWrapper>
    )
}

export default ContactFormulage