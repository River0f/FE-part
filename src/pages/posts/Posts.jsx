import { CircularProgress, Pagination } from "@mui/material";
import { usePosts } from "../../hooks/usePosts";
import { PostListItem } from "../../components/post-list-item";
import "./posts.scss";

export const Posts = () => {
  const { posts, meta, postsQuery, page, handleChangePage } = usePosts();

  return postsQuery.isLoading ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : (
    <div className="posts">
      <h1 className="posts__title">Posts</h1>
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
      <Pagination
        className="posts__pagination"
        count={meta.total_pages}
        page={page}
        onChange={(_, value) => handleChangePage(value)}
      />
    </div>
  );
};
