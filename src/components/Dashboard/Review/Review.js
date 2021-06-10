import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Review.css';
const Review = () => {
    const [imageURL, setImageURL] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { name, email } = loggedInUser;
    const userEmail =sessionStorage.getItem('userEmail');
    const userName =sessionStorage.getItem('userName');
    if(userEmail !==  null){
        email= userEmail;
        name = userName;
    }

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        const reviewData = {
            reviewerName: data.userName,
            description:data.description,
            image: imageURL
        }
        
        const url = `http://localhost:5000/addReview`
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('Review Placed successfully!!!');
                reset();
            }
        })
    };

    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '3b179b0f761eefe820295e6bfab857ee');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (

        <div className="row">
                <div className='col-lg-2 col-md-3'>
                   <Sidebar></Sidebar>
                </div>
                <div className='col-lg-10 col-md-9 d-flex flex-column right-div '>
                    <div className='d-flex justify-content-between title-div'>
                         <h5>Review</h5>
                         <p className="text-bolder">{name}</p>
                    </div>
                    <div className='right-content book-form'>
                        <div className=" mb-5">
                            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                                <input className='input-style' defaultValue={name} name="userName" {...register("userName")} placeholder="Name"/>
                                <br/>
                                <input className='input-large-style' name="description" {...register("description")} placeholder="Description"/>
                                <br/>
                                <label className="input-label">Upload Your Image</label>
                                <br />
                                <input  className="img-input pl-2" type="file" onChange={handleImageUpload} required />
                                <br/>
                                <input id="submit-btn" className='btn btn-warning mt-2 ml-2'  type="submit" />
                            </form>
                        </div>
                        
                    </div>
                </div>
        </div>
        
        
    );
};

export default Review;