import React from "react"

import {
    BackBtnWrapper,
    BackBtn,
} from "./backBtn.style"

const TextStringConvert = {
    First: '<'
}

const BackBtnComponent = () => {
    return (
        <BackBtnWrapper>
            <BackBtn onClick={() => window.history.back()}>{TextStringConvert.First}&nbsp;Wróć</BackBtn>
        </BackBtnWrapper>
    )
}

export default BackBtnComponent 