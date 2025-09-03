import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop";
import Store from "./components/Store";
import getLoaderHelper from "./utils/getLoaderHelper";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    //errorElement: <ErrorPage />
    //loader: check if storeitems in session storage, if not api fetch
  },
  {
    path: "/store",
    element: <Store />,
    errorElement: <ErrorPage />,
    loader: async () => {
      return { storeData: await getLoaderHelper() };
    },
    children: [
      { index: true, element: <App /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { index: true, element: <App /> }, //cartpreview
        ],
      }, //checkOut
      { path: "check-out", element: <App /> },
    ],
  },
];

export default routes;
