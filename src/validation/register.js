import { object, string } from "yup";

export const RegisterSchema = object({
  nickname: string()
    .required("Field is required")
    .min(4, "Nick name must be at least 4 symbols"),
  email: string().required("Field is required").email("Email is not valid"),
  password: string()
    .required("Field is required")
    .min(6, "Password name must be at least 6 symbols"),
}).required();
