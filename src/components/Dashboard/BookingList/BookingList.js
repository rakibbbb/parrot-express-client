import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './BookList.css';



const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { name, email, token } = loggedInUser;
    const [bookings, setBookings] = useState([]);
    const userToken = sessionStorage.getItem('token');
    const userEmail = sessionStorage.getItem('userEmail');
    const userName = sessionStorage.getItem('userName');
    if (userToken !== null) {
        token = userToken;
        email = userEmail;
        name = userName;
    }

    useEffect(() => {

        fetch('http://localhost:5000/bookings?email=' + email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [token])

    return (

        <div className="row">
            <div className='col-lg-2 col-md-3'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-lg-10 col-md-9 d-flex flex-column right-div '>
                <div className='d-flex justify-content-between title-div'>
                    <h5>Booking List</h5>
                    <p className="text-bolder">{name}</p>
                </div>

                <div className=" row ">
                    <table className="table table-striped">
                    <thead>
                                    <tr>
                                        <th scope="col" colspan="2">Order Id</th>
                                        <th scope="col">Order Date</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Delivery Address</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Cost</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                    </table>
                    {
                        bookings.map(book => <div key="book._id">
                            <table class="table table-striped">
                                
                                <tbody>
                                    <tr>
                                        <td colspan="2">{book._id}</td>
                                        <td>{book.date}</td>
                                        <td>{book.category}</td>
                                        <td>{book.deliveryAddress}</td>
                                        <td>{book.weight}</td>
                                        <td>{book.totalCost}</td>
                                        <td className="text-success">{book.status}</td>
                                    </tr>
                                </tbody>
                            </table>
                        
                        </div>)


                    }
                </div>


            </div>
        </div>


    );
};

export default BookingList;