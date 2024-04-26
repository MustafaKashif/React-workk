import React from "react";
import { useForm } from "react-hook-form";
import { addProducts } from "../Services/firebaseServices";
import ImageComp from "./ImageComp";
import "../App.css"

const AddProductForm = () => {
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
      <input
        type="number"
        placeholder="Enter Product's Price : "
        {...register("Price", {
          required: { value: true, message: "Price is Required" },
        })}
      />
      <br />
      <input
        type="textarea"
        placeholder="Enter Description"
        {...register("Description", {
          required: { value: true, message: "Description is Required" },
        })}
      />
      <br />
      <ImageComp/>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
