import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table1 from './table1';



export default function Create() {
    const [Setvalues, setValues] = useState({ id: "", name: "", quantity: "", rate: "", payment: "", })

    const handleInputs = (e) => {
        setValues({ ...Setvalues, [e.target.name]: e.target.value });
    }


    const eventShow = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/api/Grocery/add", Setvalues)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        // window.location.reload();
    }

    return (
        <div>
            <div>
                <form>
                    <div>
                        <label>id</label>
                    </div>
                    <div>
                        <input type='number'
                            name='id'
                            value={Setvalues.id}
                            onChange={handleInputs}
                            placeholder='id' />
                    </div>

                    <div>
                        <label>item_name</label>
                    </div>
                    <div>
                        <input type='text'
                            name='name'
                            value={Setvalues.name}
                            onChange={handleInputs}
                            placeholder='name' />
                    </div>

                    <div>
                        <label>Payment</label>
                    </div>
                    <div>
                        <input type='number'
                            name='payment'
                            value={Setvalues.payment}
                            onChange={handleInputs}
                            placeholder='Payment' />
                    </div>

                    <div>
                        <label>item_Rate</label>
                    </div>
                    <div>
                        <input type='number'
                            name='rate'
                            value={Setvalues.rate}
                            onChange={handleInputs}
                            placeholder='Rate' />
                    </div>
                    <div>
                        <label>item_Quantity</label>
                    </div>
                    <div>
                        <input type='number'
                            name='quantity'
                            value={Setvalues.quantity}
                            onChange={handleInputs}
                            placeholder='Quantity' />
                    </div>


                    <button onClick={eventShow}>Submit</button>

                </form>
                <Table1 />
            </div>
        </div>
    )
}