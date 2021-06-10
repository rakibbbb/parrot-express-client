import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Book.css';
const Book = () => {
    //Current Date
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    let currentDate = m + "/" + d + "/" + y;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { name, email } = loggedInUser;
    const userEmail = sessionStorage.getItem('userEmail');
    const userName = sessionStorage.getItem('userName');
    if (userEmail !== null) {
        email = userEmail;
        name = userName;
    }

    const [area, setArea] = useState("");
    const [weight , setWeight] = useState("");
    // const [promo , setPromo] = useState("");
    
    let price;
    if(area < 2){
        price=60;
        for (let i = 1; i < weight; i++) {
            price = price + 15;
        }    
    }else{
        price=120;
        for (let i = 1; i < weight; i++) {
            price = price + 30;
        }    
    }
    

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        const bookingData={
            name: data.name,
            email: data.email,
            phone: data.phone,
            pickupAddress: data.pickupAddress,
            deliveryAddress: data.deliveryAddress,
            weight: data.weight,
            totalCost: price,
            category: data.category,
            date: data.date,
            status:'Pending'
        }
        fetch('http://localhost:5000/addBooking', {
           method:'POST',
           headers: {'Content-Type': 'application/json'},
           body:JSON.stringify(bookingData)
       })
       .then(res=>res.json())
       .then(data=>{
           alert('Booking successfully')
           
           reset();
           
       })
    };

    return (
        <div className="row">
            <div className='col-lg-2 col-md-3'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-lg-10 col-md-9 d-flex flex-column right-div '>
                <div className='d-flex justify-content-between title-div'>
                    <h5>Booking Parcel</h5>
                    <p className="text-bolder">{name}</p>
                </div>
                <div className='right-content book-form'>
                    <div className=" mb-5">
                        <form id="myForm" onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                            <label className='input-label'>Name</label>
                            <br />
                            <input className='input-style' defaultValue={name} name="name" {...register("name")} required/>
                            <br />
                            <label className='input-label'>Email</label>
                            <br />
                            <input className='input-style' defaultValue={email} name="email" {...register("email")} required/>
                            <br />
                            <label className='input-label'  >Phone Number</label>
                            <br />
                            <input placeholder="Phone Number" className='input-style' name="phone" {...register("phone")} required/>
                            <br />
                            <label className='input-label'  >Select Delivery Area</label>
                            <br />
                            <select 
                            className='input-style' 
                            name="deliveryArea" 
                            {...register("deliveryArea")}
                            onChange={(e) => {
                                const selectedArea = e.target.value;
                                setArea(selectedArea);
                            }}
                            >
                                <option value="1">Inside Dhaka</option>
                                <option value="2">Outside Dhaka</option>
                            </select>
                            <br />
                            <label className='input-label'  >Pickup Address</label>
                            <br />
                            <input placeholder="Pickup Address" className='input-style' name="pickupAddress" {...register("pickupAddress")} required/>
                            <br />
                            <label className='input-label'  >Delivery Address</label>
                            <br />
                            <input placeholder="Delivery Address" className='input-style' name="deliveryAddress" {...register("deliveryAddress")} required/>
                            <br />
                            <label className='input-label'>Select Weight</label>
                            <br />
                            <select 
                            className='input-style' 
                            name="weight" 
                            {...register("weight")}
                            onChange={(e) => {
                                const selectedWeight = e.target.value;
                                setWeight(selectedWeight);
                            }}
                            >
                                {/* <option disabled={true} value="Not set">Select Weight</option> */}
                                <option value="1">Upto 1 kg</option>
                                <option value="2">1 kg to 2 kg</option>
                                <option value="3">2 kg to 3 kg</option>
                                <option value="4">3 kg to 4 kg</option>
                                <option value="5">4 kg to 5 kg</option>
                                <option value="6">5 kg to 6 kg</option>
                            </select>
                            <br />
                            {/* <label className='input-label'>Promo Code</label>
                            <br />
                            <input 
                            className='input-style' 
                            placeholder='Promo Code' 
                            value={this.value}
                            name="promo" 
                            {...register("promo")}
                            onChange={(e) => {
                                const selectedPromo = e.target.value;
                                setPromo(selectedPromo);
                            }}
                            />
                            <br /> */}
                            <label className='input-label'>Total Cost</label>
                            <br />
                            <input className='input-style' value={price} name="cost" {...register("cost")} readOnly/>
                            <br />
                            <label className='input-label'>Select Product Category</label>
                            <br />
                            <select className='input-style' name="category"{...register("category")}>
                                <option disabled={true} value="Not set">Select Category</option>
                                <option value="Apparels"> Apparels</option>
                                <option value="Electronic Gadgets"> Electronic Gadgets(Headphones, Powerbanks etc.)</option>
                                <option value="Smartphones"> Smartphones</option>
                                <option value="Laptop"> laptop</option>
                                <option value="Books"> Books</option>
                                <option value="Packaged Dry Food"> Packaged Dry Food</option>
                                <option value="Large Electronics"> Large Electronics(TV, Fridge, Oven)</option>
                                <option value="Liquid Item "> Liquid Item</option>
                                <option value="Others"> Others</option>
                            </select>
                            <br />
                            <label className='input-label'>Booking Date: </label>
                            <br />
                            <input className='input-style' name="date" defaultValue={currentDate} {...register("date")} required/>
                            <br />
                            <button id="submit-btn" className="btn btn-warning ml-2 mt-2" type="submit">
                                Book Now
                            </button>
                        </form>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;