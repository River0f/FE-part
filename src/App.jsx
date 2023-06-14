import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Layout } from "./components/layout";
import { Register } from "./pages/register/Register";
import { Create } from "./pages/create";

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
    {
      path: "/posts/create",
      element: <Create />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
