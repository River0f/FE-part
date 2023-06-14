import { useForm } from "react-hook-form";
import "./login.scss";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { LoginSchema } from "../../validation/login";
import { PrimaryCustomButton } from "../../styled-components/primary-custom-button";
import { TextField } from "../../components/text-field/TextField";

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
  });
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h1 className="login-form__logo">Portal</h1>
      <h2 className="login-form__title">Log in</h2>
      <TextField
        control={control}
        name="email"
        label="Email"
        type="text"
        error={errors["email"]?.message}
        className="login-form__input"
      />
      <TextField
        control={control}
        name="password"
        label="Password"
        type="password"
        error={errors["password"]?.message}
        className="login-form__input"
      />
      <PrimaryCustomButton
        className="login-form__submit"
        variant="contained"
        type="submit"
        color="primary"
      >
        Sign in
      </PrimaryCustomButton>
      <p>
        Don&apos;t have an account yet?&nbsp;
        <Link to="/register" className="login-form__link">
          Sign up
        </Link>
      </p>
    </form>
  );
};
