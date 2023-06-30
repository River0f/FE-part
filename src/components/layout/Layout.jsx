import { Link } from "react-router-dom";
import "./layout.scss";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Button } from "@mui/material";
import { UserData } from "../user-data/userData";

export const Layout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="container">
      <header className="header">
        <h1>
          <Link to="/" className="header__logo">
            Portal
          </Link>
        </h1>
        {!user ? (
          <Link to="/login" className="header__auth">
            Login
          </Link>
        ) : (
          <div className="header__user-panel">
            <Link to="/create" className="header__create">
              Create post
            </Link>
            <UserData userName={user.nickname} userAvatar={user.avatar} />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => logout()}
            >
              Log out
            </Button>
          </div>
        )}
      </header>
      <main className="main">{children}</main>
    </div>
  );
};
