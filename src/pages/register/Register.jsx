import { useForm } from "react-hook-form";
import "./register.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { RegisterSchema } from "../../validation/register";
import { PrimaryCustomButton } from "../../styled-components/primary-custom-button";
import { TextField } from "../../components/text-field";

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
      <TextField
        control={control}
        name="nickname"
        label="Nickname"
        type="text"
        error={errors["nickname"]?.message}
        className="register-form__input"
      />
      <TextField
        control={control}
        name="email"
        label="Email"
        size="small"
        type="text"
        error={errors["email"]?.message}
        className="register-form__input"
      />
      <TextField
        control={control}
        name="password"
        label="Password"
        type="password"
        size="small"
        error={errors["password"]?.message}
        className="register-form__input"
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
