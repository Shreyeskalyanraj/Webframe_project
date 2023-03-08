import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Table1() {

    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    const fetchData = async () => {
        await axios.get("http://localhost:8080/api/Grocery/show")
            .then((response) => { setDetails(response.data) })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (event, id) => {
        event.preventDefault();
        axios.delete(`http://localhost:8080/api/Grocery/delete/${id}`);
        window.location.reload();
    }

    const handleEdit = (event, id) => {
        event.preventDefault();
        navigate(`/edit/${id}`)

        window.location.reload();
    }

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Payment</th>
                </tr>
            </thead>
            <tbody>
                {details.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.quantity}</td>
                        <td>{user.rate}</td>
                        <td>{user.payment}</td>
                        <td>
                            <button onClick={(event) => handleDelete(event, user.id)}>Delete</button>
                            <button onClick={(event) => handleEdit(event, user.id)}>Edit</button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    );
}

export default Table1;