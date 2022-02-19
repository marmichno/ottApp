// styled
import { StyledGrid } from "./StyledPageNotFound"
// mui
import { Typography } from "@mui/material"

export const PageNotFound = () => {
    return (
        <StyledGrid>
            <Typography
                variant="h2"
                component="h1"
                textAlign="center"
            >
                404
            </Typography>
            <Typography
                variant="h2"
                component="h1"
                textAlign="center"
            >
                Page not found
            </Typography>
        </StyledGrid>

    )
}