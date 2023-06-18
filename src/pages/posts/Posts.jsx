import { CircularProgress } from "@mui/material";
import { usePosts } from "../../hooks/usePosts";
import { PostListItem } from "../../components/post-list-item";
import "./posts.scss";

export const Posts = () => {
  const { posts, postsQuery } = usePosts();
  return postsQuery.isLoading ? (
    <CircularProgress />
  ) : (
    <div className="posts">
      <h1>Posts</h1>
      <div className="posts__list">
        {posts.map(({ id, title, short, image, category, date, user }) => (
          <PostListItem
            key={id}
            id={id}
            title={title}
            short={short}
            image={image}
            date={date}
            userName={user.nickname}
            userAvatar={user.avatar}
            categoryName={category.name}
          />
        ))}
      </div>
    </div>
  );
};
