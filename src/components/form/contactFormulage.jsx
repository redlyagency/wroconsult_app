import React from "react"
import styled from "styled-components"
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios"
import TextField from '@mui/material/TextField';
import { FormLabel } from "@mui/material";

const ContactFormulageWrapper = styled.form`
    width: 400px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
const ContactFormulageHeaderGroupBtn = styled.div`
    display: flex;
    justify-content: center;
`
const SubmitBtn = styled.button`
    padding: 7px 80px 7px 80px;
    font-size: 15px;
    color: white;
    font-family: 'Poppins';
    border-radius: 5px;
    border: 2px #BF1E2D solid;
    background-color: #BF1E2D;
    transition: 0.2s;
    margin-top: 10px;

    :hover {
        background-color: transparent;
        color: #BF1E2D;
    }

    @media (max-width: 1023px) {
        font-size: 15px;
    }
`

const validationSchema = yup.object({
    email: yup
    .string('')
    .email("Musi zawierać '@'")
    .required('To pole jest wymagane'),
    message_content: yup
    .string('')
    .required('To pole jest wymagane'),
});

const ContactFormulage = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            message_title: '',
            message_content: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post('https://getform.io/f/3c3adf38-4116-4648-ac36-c82b7cb6c035', {
                email: values.email,
                title: values.message_title,
                content: values.message_content
            })
            //to change
        },
    });
    
    return (
        <ContactFormulageWrapper
            onSubmit={formik.handleSubmit}
        >
            <FormLabel style={{fontWeight: '700'}}>Skontaktuj się z nami poprzez formularz kontaktowy</FormLabel>
            <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                color="error" 
                type="text"
                name="email"
                fullWidth
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                id="standard-basic"
                label="Temat wiadomości"
                variant="standard"
                color="error" 
                type="text"
                name="message_title"
                fullWidth
                onChange={formik.handleChange}
            />
            <TextField
                id="standard-basic"
                label="Treść wiadomości"
                variant="standard"
                color="error" 
                type="text"
                name="message_content"
                fullWidth
                multiline
                rows={6}
                onChange={formik.handleChange}
                error={formik.touched.message_content && Boolean(formik.errors.message_content)}
                helperText={formik.touched.message_content && formik.errors.message_content}
            />
            <ContactFormulageHeaderGroupBtn>
                <SubmitBtn type="submit">Wyślij</SubmitBtn>
            </ContactFormulageHeaderGroupBtn>
        </ContactFormulageWrapper>
    )
}

export default ContactFormulage