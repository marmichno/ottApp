import styled from "styled-components";
// mui components
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)`
    && {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center; 
        text-align:center;
        margin: 5px;
        aspect-ratio: 16 / 9;
    }
`

export const StyledMediaItem = styled(({ bg, ...otherProps }) => <Grid {...otherProps} />)`
    && {
        background-color:rgba(0, 0, 0, 0.5);
        background-blend-mode:saturation;
        color:rgb(248, 248 248);
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center; 
        text-align:center;
        background-image: url(${props => props.bg});
        overflow:hidden;
    }
`