import { Typography, TextField, Button } from "@mui/material";
import { UseFormRegister, FieldErrors, SubmitHandler } from "react-hook-form";
import { FormValues } from "../types";

interface ContactFormFieldsProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  handleSubmit: (
    fn: SubmitHandler<FormValues>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: SubmitHandler<FormValues>;
  errorMessage: string | null;
}

const ContactFormFields = ({
  register,
  errors,
  handleSubmit,
  onSubmit,
  errorMessage,
}: ContactFormFieldsProps) => (
  <form
    onSubmit={handleSubmit(onSubmit)}
    style={{ display: "flex", flexDirection: "column", gap: "24px" }}
  >
    <Typography variant="h2" paragraph align="center">
      Contact us
    </Typography>
    <TextField
      {...register("name", { required: "Name is required" })}
      label="Name"
      variant="outlined"
      fullWidth
      error={!!errors.name}
      helperText={errors.name?.message}
    />
    <TextField
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email",
        },
      })}
      label="Email"
      variant="outlined"
      fullWidth
      error={!!errors.email}
      helperText={errors.email?.message}
    />
    <TextField
      {...register("message", { required: "Message is required" })}
      label="Message"
      variant="outlined"
      multiline
      rows={4}
      fullWidth
      error={!!errors.message}
      helperText={errors.message?.message}
    />
    {errorMessage && (
      <Typography color="error" align="center">
        {errorMessage}
      </Typography>
    )}
    <Button type="submit" variant="contained" color="primary" fullWidth>
      Submit
    </Button>
  </form>
);

export default ContactFormFields;