import App from "./App";
import Shop from "./components/Shop";


const routes = [
    {
        path: "/",
        element: <App />
        //errorElement: <ErrorPage />
        //loader: check if storeitems in session storage, if not api fetch
    },
    {
       path: "/shop",
        element: <Shop />,
        //error
        //loader: check if storeitems in session storage, if not api fetch also check for cart
        children: [
            {index: true, element: <App />}, //cartpreview
            {path: "check-out", element: <App />} //checkOut 
        ]
    }
]

export default routes