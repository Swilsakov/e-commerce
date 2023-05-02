import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardDetail from "./components/CardDetail/CardDetail";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartPage from "./components/CartPage/CartPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/:id",
    element: <CardDetail />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
