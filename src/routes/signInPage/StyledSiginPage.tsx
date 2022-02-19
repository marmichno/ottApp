import styled from "styled-components";
// mui components
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)`
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 100vh;
    min-height:580;
    background-image:url(https://images.unsplash.com/photo-1640127249305-793865c2efe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80);
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-color:rgba(0, 0, 0, 0.8);
    background-blend-mode:saturation;
    color:rgb(248, 248 248);
`