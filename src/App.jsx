import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Layout } from "./components/layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
