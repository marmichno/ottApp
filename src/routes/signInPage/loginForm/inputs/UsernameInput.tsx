// mui
import { TextField } from "@mui/material";
// react-hook-form
import { useFormContext, Controller } from "react-hook-form";

export const UsernameInput = () => {

    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <Controller
                name="username"
                defaultValue=""
                control={control}
                render={({ field }) => (
                    <TextField
                        inputProps={{
                            autoComplete: "off"
                        }}
                        {...field}
                        type="username"
                        sx={{marginTop:5}}
                        variant="outlined"
                        label="username"
                        fullWidth
                        error={!!errors.username}
                        helperText={errors.username ? errors.username?.message : ""}
                    />
                )}
            />
        </>
    )
}