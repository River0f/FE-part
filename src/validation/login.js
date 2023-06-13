import { object, string } from "yup";

export const LoginSchema = object({
  email: string().required("Field is required"),
  password: string().required("Field is required"),
}).required();
