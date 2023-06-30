import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { CircularProgress, TextField } from "@mui/material";
import "./post-details.scss";
import { UserData } from "../../components/user-data/userData";
import { Category } from "../../components/category";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommentShema } from "../../validation/comment";
import { CustomButton } from "../../styled-components/custom-button";

export const PostDetails = () => {
  const { id } = useParams();
  const { post, isLoading, createComment } = usePost(id);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      comment: "",
    },
    resolver: yupResolver(CommentShema),
  });
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const onSubmit = (data) => {
    console.log(data);
    createComment(data.comment, {
      onSuccess: (data) => {
        reset();
        console.log(data);
      },
    });
  };
  return isLoading ? (
    <CircularProgress />
  ) : (
    <article className="post-details">
      <header>
        <h1 className="post-details__title">{post.title}</h1>
        <div>
          <Category name={post.category.name} />
          <p>{new Date(post.date).toLocaleDateString("en-US", options)}</p>
        </div>
        <UserData userName={post.user.nickname} userAvatar={post.user.avatar} />
      </header>
      <main dangerouslySetInnerHTML={{ __html: post.body }} />
      <h3>Write a comment:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="comment"
          render={({ field }) => (
            <TextField
              {...field}
              multiline
              rows={3}
              className="post-details__comment"
            />
          )}
        />
        <CustomButton type="submit" sx={{ marginTop: "15px" }}>
          Send
        </CustomButton>
      </form>
    </article>
  );
};
