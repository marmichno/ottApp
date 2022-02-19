// styled
import { StyledGrid } from './StyledSiginPage';
// components
import { LoginForm } from './loginForm/LoginForm';

export const SignInPage = () => {

    return (
        <StyledGrid
            container
            spacing={0}
        >
            <LoginForm />
        </StyledGrid>
    )
}