import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../Lib/firebaseConfig";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageComp = () => {
  const [Image, setImage] = useState(null);
  const ImageUploading = (image) => {
    if (image === null) {
      return;
    }
    const perfect_Id = new Date().getTime()
    const storageRef = ref(storage, `files/${perfect_Id}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          localStorage.setItem("ImageUrl", downloadURL)
        });
      }
    );
  };
  return (
    <>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <br />
      <br/>
      <Button
      variant="outline-info"
        onClick={() => {
          ImageUploading(Image);
        }}
      >
        Upload
      </Button>
    </>
  );
};

export default ImageComp;
