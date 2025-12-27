import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Publicsite from "./pages/publicsite/Publicsite";
import Login from "./pages/publicsite/login";
import SignUp from "./pages/publicsite/signUp";
import PublicBody from "./components/publiclayout/PublicBody";
import MainSite from "./pages/mainsite/MainSite";
import PrivateRoute from "./route/PrivateRoute";
import { Navigate } from "react-router-dom";
import Player from "./components/Privatelayout/Player";

const appRouter = createBrowserRouter([
  {
    path: "/in",
    element: <Publicsite />,
    children: [
      { index: true, element: <PublicBody /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },

  { path: "/login", element: <Navigate to="/in/login" replace /> },
  { path: "/signup", element: <Navigate to="/in/signup" replace /> },

  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainSite />
      </PrivateRoute>
    ),
  },
  {
    path: "player/:id",
    element: (
      <PrivateRoute>
        <Player />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
