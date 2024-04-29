import { child, get, push, ref, remove, set } from "firebase/database";
import { db } from "../Lib/firebaseConfig";
import { productEntity } from "../Lib/firebaseEntities";

const dbRef = ref(db);

export const addProducts = async (data) => {
  try {
    const productKey = push(child(ref(db), productEntity)).key;
    const productEntityRef = ref(db, productEntity + "/" + productKey);
    const productImage = localStorage.getItem("ImageUrl");
    const response = set(productEntityRef, {
      pid: productKey,
      image: productImage,
      ...data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async () => {
  try {
    const response = await get(child(dbRef, productEntity));

    if (response.exists()) {
      const data = response.val();
      return Object.values(data);
    }
  } catch (error) {
    console.error("Error", error);
  }
};

export const getProductById = async (id) => {
    try {
      
    } catch (error) {
      console.error("Error fetching product: ", error);
      return null;
    }
};

export const deleteProductsById = async (id) => {
  try {
    const dbReference = ref(db, productEntity + "/" + id);
    remove(dbReference).then(() => console.log("Removed !"));
    alert("Product is removed successfully");
  } catch (error) {
    console.error("Error", error);
  }
};
