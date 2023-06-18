import { useForm } from "react-hook-form";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { LoginSchema } from "../../validation/login";
import { TextField } from "../../components/text-field/TextField";
import { CustomButton } from "../../styled-components/custom-button";

export const Login = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    login(data, () => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h1 className="login-form__logo">Portal</h1>
      <h2 className="login-form__title">Log in</h2>
      <TextField
        control={control}
        name="email"
        variant="outlined"
        label="Email"
        type="text"
        className="login-form__input"
      />
      <TextField
        control={control}
        name="password"
        variant="outlined"
        label="Password"
        type="password"
        className="login-form__input"
      />
      <CustomButton
        className="login-form__submit"
        variant="contained"
        type="submit"
        color="primary"
      >
        Sign in
      </CustomButton>
      <p>
        Don&apos;t have an account yet?&nbsp;
        <Link to="/registration" className="login-form__link">
          Sign up
        </Link>
      </p>
    </form>
  );
};
