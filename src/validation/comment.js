import { object, string } from "yup";

export const CommentShema = object({
  comment: string(),
}).required();
