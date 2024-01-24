import Home from "./pages/Home";
import PlaylistView from "./pages/PlaylistView";
import PlaylistEditor from "./pages/PlaylistEditor";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/playlist/:id",
    element: <PlaylistView />,
    errorElement: <ErrorPage />
  },
  {
    path: "/editor/:id",
    element: <PlaylistEditor />,
    errorElement: <ErrorPage />
  },
  {
    path: "/editor/new",
    element: <PlaylistEditor />,
    errorElement: <ErrorPage />
  },

];

export default routes;