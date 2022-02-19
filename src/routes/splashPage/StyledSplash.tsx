import styled from "styled-components"
import { Grid } from "@mui/material"
import { Typography } from "@mui/material";
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

export const StyledGrid = styled(Grid)`
    && {
        width:100vw;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        flex-direction:column;
        background-image:url(https://images.unsplash.com/photo-1640127249305-793865c2efe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80);
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        background-color:rgba(0, 0, 0, 0.8);
        background-blend-mode:saturation;
        color:rgb(248, 248 248);
    }
`

export const StyledLiveTvOutlinedIcon = styled(LiveTvOutlinedIcon)`
    &&{
        width:160px;
        height:160px;
    }
`

export const StyledTypography = styled(({ ...otherProps }) => <Typography {...otherProps} />)`
    && {
        color:rgb(220, 220, 220);
        @media (max-width:720px) {
            font-size:4em;
        }
    }
`