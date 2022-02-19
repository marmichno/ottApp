import styled from "styled-components";
// mui components
import { Grid } from "@mui/material";
// scroll container
import ScrollContainer from "react-indiana-drag-scroll";

export const StyledGrid = styled(Grid)`
    && {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height: 30%;
        min-height: 250px;
        width:90%;
        color:white;
        margin-bottom:5%;
    }
`
export const StyledScrollContainer= styled(ScrollContainer)`
    && {
        height: 100%;
        width:100%;
        display:flex;
        color:black;
    }
`
