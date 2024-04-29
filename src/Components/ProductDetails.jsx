import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { getProductById } from "../Services/firebaseServices";
import { Button } from "react-bootstrap";

const ProductDetails = () => {
  const {id} = useParams();
  console.log(id)
  const [data, setData] = useState(null);
  useEffect(() => {
    if (id) {
      (async () => {
        const detailOfProducts = await getProductById(id);
        setData(detailOfProducts);
      })();
    }
  }, [id]);
  return <>
  {data.map((products, idx) => {
    return (
      <div key={idx}>
        <img src = {products.image}/>
        <br/>
        <br/>
        <p>{products.Name} - {products.Price} </p>
        <br/>
        <br/>
        <p>{products.Description}</p>
        <br/>
        <br/>
        <Button variant = "outline-primary">Buy Now</Button>
      </div>
    )
  })}
  </>;
};

export default ProductDetails;
