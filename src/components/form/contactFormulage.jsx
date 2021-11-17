import React from "react"
import styled from "styled-components"
import TextField from '@mui/material/TextField';

import SubmitBtn from "../buttons/mainBtn"

//<TextField id="standard-basic" label="Email" variant="standard" color="error" /><br />
//<TextField id="standard-basic" label="Temat wiadomości" variant="standard" color="error" /><br />
//<TextField id="standard-basic" label="Treść wiadomości" variant="standard" color="error" />

const ContactFormulageWrapper = styled.div`
    background-color: cornflowerblue;

`

class ContactFormulage extends React.Component {
    render() {
        return (
            <ContactFormulageWrapper>

                    <TextField id="standard-basic" label="Nazwa" variant="standard" color="error" />
                    <SubmitBtn
                        isContactPage
                        name="Wyślij"
                    />
            </ContactFormulageWrapper>
        )
    }
}

export default ContactFormulage