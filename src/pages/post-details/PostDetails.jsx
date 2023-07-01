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
import { Comment } from "../../components/comment/comment";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";

export const PostDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
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

  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (post?.comments) {
      setComments(post?.comments);
    }
  }, [post?.comments]);

  const onSubmit = (data) => {
    createComment(data.comment, {
      onSuccess: (data) => {
        reset();
        setComments([
          ...comments,
          {
            id: data.id,
            text: data.text,
            avatar: user.avatar,
            nickname: user.nickname,
          },
        ]);
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
      {user && (
        <>
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
        </>
      )}
      <div className="post-details__comments">
        <h2 className="post-details__comments-title">Comments</h2>
        <div className="post-detail__comments-list">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              avatar={comment.avatar}
              comment={comment.text}
              userName={comment.nickname}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
