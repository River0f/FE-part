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
          <Link to="/login" className="header__login">
            Login
          </Link>
        ) : (
          <div className="header__user-panel">
            <UserData userName={user.nickname} userAvatar={user.avatar} />
            <Button onClick={() => logout()}>Log out</Button>
            <Link to="/create" className="header__logo">
              Create post
            </Link>
          </div>
        )}
      </header>
      <main className="main">{children}</main>
      <footer className="footer"></footer>
    </div>
  );
};
