import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import "./login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export const Login = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h1 className="login-form__title">Login</h1>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            label="Email"
            size="small"
            type="text"
            {...field}
            className="login-form__input"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            label="Password"
            type="password"
            size="small"
            {...field}
            className="login-form__input"
          />
        )}
      />
      <Button
        className="login-form__submit"
        variant="contained"
        type="submit"
        color="primary"
      >
        Sign in
      </Button>
      <p>
        Don&apos;t have an account yet&nbsp;
        <Link to="/register" className="login-form__link">
          Sign Up
        </Link>
      </p>
    </form>
  );
};
