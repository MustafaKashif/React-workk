import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProductForm from "../Components/AddProductForm";
import ProductDetails from "../Components/ProductDetails";
import App from "../App";
import AdminDashboard from "../Components/AdminDashboard";
import InputModal from "../Components/InputModal";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <App/>  
    },
    {
      path : "add-product",
      element : <AddProductForm/>
    },
    {
      path : "product/:id",
      element : <ProductDetails/>
    },
    {
      path : "adminDashboard",
      element : <AdminDashboard/>
    },
    {
      path : "showModal",
      element : <InputModal/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
