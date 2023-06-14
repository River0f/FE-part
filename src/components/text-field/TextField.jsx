import { Controller } from "react-hook-form";
import { CustomTextField } from "../../styled-components/custom-text-field";

export const TextField = ({
  control,
  name,
  label,
  error,
  className,
  type,
  variant = "standart",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <CustomTextField
          label={label}
          size="small"
          variant={variant}
          type={type}
          error={!!error}
          helperText={error || " "}
          {...field}
          className={className}
        />
      )}
    />
  );
};
