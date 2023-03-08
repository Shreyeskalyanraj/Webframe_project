import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const { id } = useParams();

    const navigate = useNavigate();


    const initialState = { 
        id: "", 
        name: "", 
        quantity: "", 
        rate: "", 
        payment: "" 
    }


    const [details, setDetails] = useState(initialState);

    const handleInputs = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/Grocery/show/${id}`);
                setDetails(response.data);
                console.log(details);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])

    const eventUpdate = () => {
        axios.put(`http://localhost:8080/api/Grocery/update/${id}`, details);
        navigate("/form")
    }

    const eventCancel = () =>{
        navigate("/form")
    }

    return (
        <div>
            <form>
                <div>
                    <label>id</label>
                </div>
                <div>
                    <input type='number'
                        name='id'
                        value={details.id}
                        onChange={handleInputs}
                        placeholder='id' />
                </div>

                <div>
                    <label>item_name</label>
                </div>
                <div>
                    <input type='text'
                        name='name'
                        value={details.name}
                        onChange={handleInputs}
                        placeholder='name' />
                </div>

                <div>
                    <label>Payment</label>
                </div>
                <div>
                    <input type='number'
                        name='payment'
                        value={details.payment}
                        onChange={handleInputs}
                        placeholder='Payment' />
                </div>

                <div>
                    <label>item_Rate</label>
                </div>
                <div>
                    <input type='number'
                        name='rate'
                        value={details.rate}
                        onChange={handleInputs}
                        placeholder='Rate' />
                </div>
                <div>
                    <label>item_Quantity</label>
                </div>
                <div>
                    <input type='number'
                        name='quantity'
                        value={details.quantity}
                        onChange={handleInputs}
                        placeholder='Quantity' />
                </div>


                <button onClick={eventUpdate}>Update</button>
                <button onClick={eventCancel}>Cancel</button>

            </form>
        </div>
    )
}

export default Edit