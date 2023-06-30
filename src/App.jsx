import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Layout } from "./components/layout";
import { Register } from "./pages/register/Register";
import { Create } from "./pages/create";
import { Posts } from "./pages/posts/";
import { PostDetails } from "./pages/post-details";
import { AuthProvider } from "./contexts/auth";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/registration",
      element: (
        <Layout>
          <Register />
        </Layout>
      ),
    },
    {
      path: "/create",
      element: (
        <Layout>
          <Create />
        </Layout>
      ),
    },
    {
      path: "/",
      element: (
        <Layout>
          <Posts />
        </Layout>
      ),
    },
    {
      path: "/:id",
      element: (
        <Layout>
          <PostDetails />
        </Layout>
      ),
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
