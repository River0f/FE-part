import { Link } from "react-router-dom";
import { BASE_URL } from "../../http";
import "./post-list-item.scss";
import { Category } from "../category";
import { UserData } from "../user-data/userData";

export const PostListItem = ({
  id,
  title,
  short,
  image,
  categoryName,
  date,
  userName,
  userAvatar,
}) => {
  const localeDate = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="post">
      <h1 className="post__title">
        <Link to={`/${id}`} className="post__title__link">
          {title}
        </Link>
      </h1>
      <div>
        <Category name={categoryName} />
        <p>{localeDate.toLocaleDateString("en-US", options)}</p>
      </div>
      {image && <img src={`${BASE_URL}${image}`} className="post__image" />}
      <div dangerouslySetInnerHTML={{ __html: short }} />
      <UserData userName={userName} userAvatar={userAvatar} />
    </div>
  );
};
