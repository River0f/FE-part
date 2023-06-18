import { Controller } from "react-hook-form";
import { CustomTextField } from "../../styled-components/custom-text-field";

export const TextField = ({
  control,
  name,
  label,
  className,
  type,
  variant = "standard",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <CustomTextField
          label={label}
          InputLabelProps={{ shrink: true }}
          size="small"
          variant={variant}
          type={type}
          error={!!fieldState.error}
          helperText={fieldState.error?.message || " "}
          {...field}
          className={className}
        />
      )}
    />
  );
};
