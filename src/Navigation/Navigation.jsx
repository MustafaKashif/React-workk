import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProductForm from "../Components/AddProductForm";
import ProductDetails from "../Components/ProductDetails";
import App from "../App";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <App/>  
    },
    {
      path: "add-product",
      element: <AddProductForm />,
    },
    {
      path : "product/:id",
      element : <ProductDetails/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
