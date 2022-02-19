// mui
import { TextField } from "@mui/material";
// react-hook-form
import { useFormContext, Controller } from "react-hook-form";

export const PasswordInput = () => {

    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <Controller
                name="password"
                defaultValue=""
                control={control}
                render={({ field }) => (
                    <TextField
                        inputProps={{
                            autoComplete: 'new-password'
                        }}
                        {...field}
                        type="password"
                        sx={{marginTop:5}}
                        variant="outlined"
                        label="password"
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password ? errors.password?.message : ""}
                    />
                )}
            />
        </>
    )
}