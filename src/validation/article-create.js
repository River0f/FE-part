import { object, string } from "yup";

export const CreateArticleSchema = object({
  title: string()
    .required("Field is required")
    .min(10, "Title must have at leat 10 symbols long"),
}).required();
