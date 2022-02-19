// mui components
import { Container } from "@mui/material"
import { Button } from "@mui/material"
import { Paper } from "@mui/material"
// styled
import styled from "styled-components";

export const StyledCaptionContainer = styled(Container)`
    && {
        display:flex;
        justify-content: space-between;
        text-align: center;

        @media (max-width:500px) {
            flex-direction:column;
            height: 8%;
        }
    }
`

export const StyledButton = styled(Button)`
    && {
        margin-top:70px;
        margin-bottom:15px;
        background-color:2bbbbf;
    }
`

export const StyledPaper = styled(Paper)`
    && {
        min-height: 580px;
        height: 70%;
        width: 28%;
        padding-left: 50px;
        padding-right:50px;
        padding-bottom: 50px;
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        opacity: 0.97;
        background-color:rgba(0, 0, 0, 0.4);
        color:rgb(248, 248, 248);

        @media (max-width:1585px) {
            width:35%;
        }

        @media (max-width:1200px) {
            width:40%;
        }

        @media (max-width:1037px) {
            width:50%;
        }

        @media (max-width:900px) {
            width:60%;
        }

        @media (max-width:700px) {
            width: 70%;
        }

        @media (max-width:565px) {
            width:100%;
            padding-right:30px;
            padding-left:30px;
        }

        form {
            .MuiFormControl-root {
                .MuiOutlinedInput-root {
                    color:rgb(240, 240, 240);
                }
                .MuiInputLabel-root {
                    color:rgb(240, 240, 240);
                }
            }
        }
        .MuiOutlinedInput-root {
            fieldset {
                border-color:#1461ba67;
            }
        }
    }
`

export const StyledPaperLoggedIn = styled(Paper)`
    && {
        min-height: 350px;
        width: 28%;
        padding-left: 50px;
        padding-right:50px;
        padding-bottom: 50px;
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        opacity: 0.97;
        background-color:rgba(0, 0, 0, 0.4);
        color:rgb(248, 248, 248);

        @media (max-width:1585px) {
            width:35%;
        }

        @media (max-width:1200px) {
            width:40%;
        }

        @media (max-width:1037px) {
            width:50%;
        }

        @media (max-width:900px) {
            width:60%;
        }

        @media (max-width:700px) {
            width: 70%;
        }

        @media (max-width:565px) {
            width:100%;
            padding-right:30px;
            padding-left:30px;
        }
    }
`