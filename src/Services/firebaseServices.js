import { child, get, push, ref, set } from "firebase/database";
import { db } from "../Lib/firebaseConfig";
import { productEntity } from "../Lib/firebaseEntities";

const dbRef = ref(db)

export const addProducts = async (data) => {
  try {
    const productKey = push(child(ref(db), productEntity)).key;
    const productEntityRef = ref(db, productEntity + "/" + productKey);
    const productImage =  localStorage.getItem("ImageUrl");
    const response = set(productEntityRef, {
      pid: productKey,
      image : productImage,
      ...data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async () => {
  try {
      const response = await get(child(dbRef, productEntity))

      if (response.exists()) {
          const data = response.val()
          return Object.values(data)
      }
  } catch (error) {
      console.error('Error', error)
  }
}