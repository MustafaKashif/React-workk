import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddProductForm from "./AddProductForm";
import { useNavigate } from "react-router-dom";

function InputModal() {
  useEffect(() => {
    setShow(true);
  }, []);
  const [show, setShow] = useState(false);
  const Navigate = useNavigate()

  const handleClose = () => {
    setShow(false)
Navigate("/adminDashboard")
    
};

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProductForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InputModal;
