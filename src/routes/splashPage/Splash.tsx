// hooks
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// styled
import { StyledGrid, StyledLiveTvOutlinedIcon, StyledTypography } from './StyledSplash';

export const Splash = () => {

    const navigate = useNavigate();
    const [isUserLogged, setIsUserLogged] = useState<boolean>(!!localStorage.getItem("token"))

    useEffect(() => {
        if(isUserLogged){
            setTimeout(() => {
                navigate("/home");
            }, 3000);
        }else {
            setTimeout(() => {
                navigate("/sign-in");
            }, 3000);
        }
    }, [isUserLogged]);

    return (
        <StyledGrid>
            <StyledLiveTvOutlinedIcon color="primary"/>
            <StyledTypography
                variant="h1"
                component="h1"
                sx={{color:"rgb(220, 220, 220)"}}
            >
                Ott application
            </StyledTypography>
        </StyledGrid>
    )
}