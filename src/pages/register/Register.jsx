import { useForm } from "react-hook-form";
import "./register.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { RegisterSchema } from "../../validation/register";
import { TextField } from "../../components/text-field";
import { CustomButton } from "../../styled-components/custom-button";

export const Register = () => {
  const { control, handleSubmit } = useForm({
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
        variant="outlined"
        type="text"
        className="register-form__input"
      />
      <TextField
        control={control}
        name="email"
        label="Email"
        variant="outlined"
        type="text"
        className="register-form__input"
      />
      <TextField
        control={control}
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        className="register-form__input"
      />
      <CustomButton
        className="register-form__submit"
        variant="contained"
        type="submit"
        color="primary"
      >
        Sign up
      </CustomButton>
    </form>
  );
};
