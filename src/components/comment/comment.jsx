import { UserData } from "../user-data/userData";

export const Comment = ({ avatar, userName, comment }) => {
  return (
    <div>
      <UserData userName={userName} avatar={avatar} />
      <p>{comment}</p>
    </div>
  );
};
