import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { CircularProgress } from "@mui/material";
import "./post-details.scss";
import { UserData } from "../../components/user-data/userData";
import { Category } from "../../components/category";

export const PostDetails = () => {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
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
    </article>
  );
};
