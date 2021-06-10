import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AdminDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { name, email } = loggedInUser;
    const userEmail = sessionStorage.getItem('userEmail');
    const userName = sessionStorage.getItem('userName');
    if (userEmail !== null) {
        email = userEmail;
        name = userName;
    }

    //Month and Year
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;

    var b = "";

    switch(m){
        case 1: b = "January";
            break;
        case 2: b = "February";
            break;
        case 3: b = "March";
            break;
        case 4: b = "April";
            break;
        case 5: b = "May";
            break;
        case 6: b = "June"; 
            break;
        case 7: b = "July";
            break;
        case 8: b = "August";
            break;
        case 9: b = "September";
            break;
        case 10: b = "October";
            break;
        case 11: b = "November";
            break;
        case 12: b = "December";
            break;
        }

    // load all bookings
    const [bookingsData, setBookingsData] = useState([]);
    const bookings = bookingsData.length;
    useEffect(() => {
        fetch('http://localhost:5000/bookings/all')
            .then(res => res.json())
            .then(data => setBookingsData(data))
    }, [])

    // load all managers
    const [managersData, setManagersData] = useState([]);
    const managers = managersData.length;
    useEffect(() => {
        fetch('http://localhost:5000/managers/all')
            .then(res => res.json())
            .then(data => setManagersData(data))
    }, [])


    return (
        <div className="row">
            <div className='col-lg-2 col-md-3'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-lg-10 col-md-9 d-flex flex-column right-div '>
                <div className='d-flex justify-content-between title-div'>
                    <h5>Dashboard</h5>
                    <p className="text-bolder">{name}</p>
                </div>

                <div className=" d-flex mt-5 pb-5">
                    <div className="card" style={{ width: "18rem", height: "10rem", backgroundColor: "yellow", marginRight: "10px" }}>
                        <div className="card-body">
                            <h2 className="card-title mb-4">Total Bookings({b})</h2>
                            <h3 className="card-title mb-4">{bookings}</h3>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem", height: "10rem", backgroundColor: "cyan", marginRight: "10px" }}>
                        <div className="card-body">
                            <h2 className="card-title mb-4">Total Managers</h2>
                            <h3 className="card-title mb-4">{managers}</h3>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem", height: "10rem", backgroundColor: "goldenrod", marginRight: "10px" }}>
                        <div className="card-body">
                            <h2 className="card-title mb-4">Total Bookings({y})</h2>
                            <h3 className="card-title mb-4">{bookings}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;