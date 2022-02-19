// mui
import { Typography } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "@mui/material"
// input components
import { UsernameInput } from "./inputs/UsernameInput";
import { PasswordInput } from "./inputs/PasswordInput"
// react-hook-form
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// validation schema
import { validationSchema } from './validationSchema/validationSchema';
// router
import { useNavigate } from 'react-router-dom';
// hooks
import { useState, useEffect } from 'react';
// styled
import { StyledCaptionContainer, StyledButton, StyledPaper, StyledPaperLoggedIn } from './styledLoginForm';
// redux
import { useDispatch } from 'react-redux';
// actions
import { postSignIn } from '../../../redux/actions/authorization/signIn/signInActions';
// icons
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
// hooks
import {useAppSelector} from "../../../hooks/hooks";

interface InputForm {
    username: string,
    password: string
}

export const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isUserLogged, setIsUserLogged] = useState<boolean>(!!localStorage.getItem("token"));
    const loginState = useAppSelector(state => state.signIn);

    useEffect(() => {
        if(loginState.response){
            navigate("/home");
        }
    },[loginState]);

    const methods = useForm<InputForm>({
        resolver: yupResolver(validationSchema)
    });

    const formSubmitHandler: SubmitHandler<InputForm> = (data) => {
        dispatch(postSignIn(data.username, data.password));
    }

    const logout = () => {
        localStorage.removeItem("token");
        setIsUserLogged(false);
    }

    const formSwitchRender = () => {
        if (isUserLogged) {
            return (
                <StyledPaperLoggedIn>
                    <LiveTvOutlinedIcon color="primary" sx={{width:80, height:80}}/>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ textAlign: "center", marginBottom:5 }}
                    >
                        You are already logged in.
                    </Typography>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={logout}
                    >
                        Logout
                    </Button>
                </StyledPaperLoggedIn>
            )
        } else {
            return (
                <StyledPaper
                    elevation={3}
                >
                    <LiveTvOutlinedIcon color="primary" sx={{width:80, height:80}}/>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ textAlign: "center" }}
                    >
                        Sign in
                    </Typography>

                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(formSubmitHandler)} noValidate autoComplete="off">
                            <UsernameInput />
                            <PasswordInput />
                            <StyledButton
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                Sign in
                            </StyledButton>
                        </form>
                    </FormProvider>

                    <StyledCaptionContainer>
                        <Link href="#" underline="none">
                            Forgot your password?
                        </Link>
                        <Link href="#" underline="none">
                            Create account
                        </Link>
                    </StyledCaptionContainer>
                </StyledPaper >
            )
        }
    }

    return (
        <>
            {formSwitchRender()}
        </>
    )
}