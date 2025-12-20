import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Publicsite from "./pages/publicsite/Publicsite";
import Login from "./pages/publicsite/login";
import SignUp from "./pages/publicsite/signUp";
import PublicBody from "./components/publiclayout/PublicBody";
import MainSite from "./pages/mainsite/MainSite";
import PrivateRoute from "./route/PrivateRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Publicsite />,
    children: [
      { index: true, element: <PublicBody /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },

  {
    path: "/app",
    element: (
      <PrivateRoute>
        <MainSite />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
