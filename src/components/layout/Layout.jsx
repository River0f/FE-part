import "./layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header__logo">Portal</h1>
      </header>
      <main className="main">{children}</main>
      <footer className="footer"></footer>
    </div>
  );
};
