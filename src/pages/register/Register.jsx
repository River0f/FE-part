import { Controller, useForm } from "react-hook-form";
import "./register.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { RegisterSchema } from "../../validation/register";
import { CustomTextField } from "../../styled-components/custom-text-field";
import { PrimaryCustomButton } from "../../styled-components/primary-custom-button";

export const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(RegisterSchema),
  });
  const { register } = useContext(AuthContext);

  const onSubmit = async (data) => {
    register(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      <h1 className="register-form__logo">Portal</h1>
      <h2 className="register-form__title">Sign up</h2>
      <Controller
        name="nickname"
        control={control}
        render={({ field }) => (
          <CustomTextField
            label="Nickname"
            type="text"
            size="small"
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message || " "}
            {...field}
            className="register-form__input"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <CustomTextField
            label="Email"
            size="small"
            type="text"
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message || " "}
            {...field}
            className="register-form__input"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <CustomTextField
            label="Password"
            type="password"
            size="small"
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message || " "}
            {...field}
            className="register-form__input"
          />
        )}
      />
      <PrimaryCustomButton
        className="register-form__submit"
        variant="contained"
        type="submit"
        color="primary"
      >
        Sign up
      </PrimaryCustomButton>
    </form>
  );
};
