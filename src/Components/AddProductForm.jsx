import React from "react";
import { useForm } from "react-hook-form";
import { addProducts } from "../Services/firebaseServices";
import ImageComp from "./ImageComp";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const AddProductForm = () => {
  const Navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();
  const submitHandler = async (data) => {
    const Products = await addProducts(data);
    reset();
    alert("Product Added SuccessFully! ");
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        type="text"
        placeholder="Enter Product name : "
        {...register("Name", {
          required: { value: true, message: "Name is Required" },
        })}
      />
      <br />
      <br/>
      <input
        type="number"
        placeholder="Enter Product's Price : "
        {...register("Price", {
          required: { value: true, message: "Price is Required" },
        })}
      />
      <br />
      <br/>
      <input
        type="number"
        placeholder="Enter Product's Quantity : "
        {...register("Quantity", {
          required: { value: true, message: "Quantity is Required" },
        })}
      />
      <br />
      <br/>
      <input
        type="textarea"
        placeholder="Enter Description"
        {...register("Description", {
          required: { value: true, message: "Description is Required" },
        })}
      />
      <br />
      <br/>
      <ImageComp/>
      <br />
      <br/>
      <Button variant = "outline-primary" type="submit" onClick={Navigate("/adminDashboard")}>Add Product</Button>
    </form>
  );
};

export default AddProductForm;
