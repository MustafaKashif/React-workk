import React, { useState, useEffect } from 'react'
import { deleteProductsById, getAllProducts } from '../Services/firebaseServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [productsData, setProductsData] = useState(["1", "2", "3"]);
    useEffect(() => {
        (async () => {
          const productsResponse = await getAllProducts();
          setProductsData(productsResponse);
        })();
      }, [productsData]);
  return (
    <>
    <div style={{display : "flex", margin : "20px"}}>
    <h3>Admin Dashboard</h3>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to={"/showModal"}>
    <Button variant='outline-primary'>Add Products</Button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Button variant = "outline-info">LogOut</Button>
    </div>
    <br/>
    <Table striped>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            {productsData.map((products, idx) => {
                return (
                    <tr key={idx}>
                        <td>{products.pid}</td>
                        <td>{products.Name}</td>
                        <td>{products.Price}</td>
                        <td>{products.Quantity}</td>
                        <td><Button variant='outline-danger' onClick={() => deleteProductsById(products.pid)}>Delete</Button></td>
                    </tr>
                )

            })}
        </tbody>
    </Table>
    </>
  )
}

export default AdminDashboard