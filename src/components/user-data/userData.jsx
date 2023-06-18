import { Avatar } from "@mui/material";

export const UserData = ({ userName, userAvatar }) => {
  return (
    <div className="post__user">
      <Avatar alt={userName} src={userAvatar} sx={{ width: 34, height: 34 }}>
        {userName[0]}
      </Avatar>
      <div>{userName}</div>
    </div>
  );
};
