import styled from "styled-components";
// mui components
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)`
    && {
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        height: 100vh;
        width: 100vw;
        background-color:black;
        color:white;
        overflow-y:scroll;
    }
`

export const StyledErrorAndLoading = styled(Grid)`
    && {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100vw;
        height:100vh;
        z-index:5;
        position:absolute;
    }
`