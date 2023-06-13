import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Layout } from "./components/layout";
import { Register } from "./pages/register/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
