import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { name, email } = loggedInUser;
    const userEmail =sessionStorage.getItem('userEmail');
    const userName =sessionStorage.getItem('userName');
    if(userEmail !==  null){
        email= userEmail;
        name = userName;
    }
     // load all bookings
     const [orders, setOrders] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/bookings/all')
         .then(res => res.json())
         .then(data => setOrders(data))
     }, [orders])

    const handleStatus = id =>{
         const orderStatus =document.getElementById('order-status').value;
         const orderData = {
            status: orderStatus
        }
        //console.log(id);
        fetch(`http://localhost:5000/booking/update/${id}`, {
            method: 'PATCH',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(orderData)
        })
        .then(res=>res.json())
        .then(data=>{
                
        })
    }

    //delete Order
    const handleDelete= id =>{
        fetch(`http://localhost:5000/booking/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    }
    return (
        <div className="row">
            <div className='col-lg-2 col-md-3'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-lg-10 col-md-9 d-flex flex-column right-div '>
                <div className='d-flex justify-content-between title-div'>
                        <h5>Manage Order</h5>
                        <p className="text-bolder">{name}</p>
                </div>
                
                <div className=" d-flex justify-content-center mt-5 pb-5">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Invoice Number</th>
                                <th scope="col">Name</th>
                                {/* <th scope="col">Email</th> */}
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                 orders.map(order=> <tr key={order._id}>
                                                        <td data-label="Id">{order._id}</td>
                                                        <td data-label="Name">{order.name}</td>
                                                        {/* <td data-label="Email" style={{wordWrap: 'break-word'}}>{order.email}</td> */}
                                                        <td data-label="Service">{order.date}</td>
                                                        <td data-label="Status"><select name="status" id="order-status" onChange={()=>handleStatus(order._id)} defaultValue={order.status}>
                                                                <option value="Pending">Pending</option>
                                                                <option value="Confirm">Confirm</option>
                                                                <option value="Picked">Picked</option>
                                                                <option value="Shiped">Shiped</option>
                                                                <option value="Delivered">Delivered</option>
                                                                {/* <option value="Cancel">Cancel</option> */}
                                                            </select></td>
                                                        <td data-label="Action"> <p style={{ cursor: 'pointer' }} onClick={() => handleDelete(order._id)}><FontAwesomeIcon icon={faTrashAlt} /></p></td>
                                                     </tr>)
                                }
                         </tbody>
                    </table>
                </div>
            </div>
       </div>
        
    );
};

export default OrderList;