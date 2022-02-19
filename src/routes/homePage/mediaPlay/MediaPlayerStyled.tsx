import styled from "styled-components";
// mui components
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)`
    && {
        position:absolute;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100vw;
        height:100vh;
        z-index:2;
        background-color:black;
        color:white;
    }
`