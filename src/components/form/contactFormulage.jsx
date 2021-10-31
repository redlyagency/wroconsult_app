import React from "react"
import styled from "styled-components"
import TextField from '@mui/material/TextField';

import SubmitBtn from "../buttons/mainBtn"

const ContactFormulageWrapper = styled.div`

`

class ContactFormulage extends React.Component {
    render() {
        return (
            <ContactFormulageWrapper>

                    <TextField id="standard-basic" label="Nazwa" variant="standard" color="error" />
                    <TextField id="standard-basic" label="Email" variant="standard" color="error" /><br />
                    <TextField id="standard-basic" label="Temat wiadomości" variant="standard" color="error" /><br />
                    <TextField id="standard-basic" label="Treść wiadomości" variant="standard" color="error" />
                    <SubmitBtn name="submit_btn"/>
            </ContactFormulageWrapper>
        )
    }
}

export default ContactFormulage