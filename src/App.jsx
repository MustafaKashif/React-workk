import React, { useState, useEffect } from "react";
import ProductCard from "./Components/ProductCard";
import { getAllProducts } from "./Services/firebaseServices";

const App = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const productsResponse = await getAllProducts();
      setProducts(productsResponse);
    })();
  }, []);

  if (!products) return null
  return (
    <>
      <h1 style={{textAlign : "center", margin : "20px"}}>Product Listing</h1>
      {products.map((product, idx) => {
        return <ProductCard {...product} />;
      })}
    </>
  );
};

export default App;
