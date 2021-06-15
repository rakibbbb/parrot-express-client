import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

const TrackingDetails = (props) => {
    // const [progress, setProgress] = useState(0);
    const booking = props.booking[0];

    const {_id, category, date, deliveryAddress, email, delivery, name, phone, pickupAddress, status , totalCost, weight} = booking;
    // console.log(booking);
    // let status = booking.status;
    // console.log(status);

    let progress = 0;
    switch (status) {
        case 'Pending':
            progress = 12;
            break;
        case 'Confirm':
            progress = 34;
            break;
        case 'Picked':
            progress = 55;
            break;
        case 'Shiped':
            progress = 77;
            break;
        case 'Delivered':
            progress = 100;
            break;
        default:
            progress = 0;
    }

    return (
        <section className="container mt-5" style={{ width: "70%"}}>
            <div>
                <h5>Invoice Number: {_id} </h5>
                <h5>Name: {name}</h5>
            </div>
            <div>
                <div style={{ width: "86% " }}>
                    <h5>Status:</h5>
                    <ProgressBar>
                        <ProgressBar striped variant="success" now={progress} key={1} />
                    </ProgressBar>
                </div>
                <div className="pl-5">
                    <div className="d-inline-block" style={{ width: "20%" }}>Pending</div>
                    <div className="d-inline-block" style={{ width: "20%" }}>Confirm</div>
                    <div className="d-inline-block" style={{ width: "20%" }}>Picked</div>
                    <div className="d-inline-block" style={{ width: "20%" }}>Shiped</div>
                    <div className="d-inline-block" style={{ width: "20%" }}>Delivered</div>
                </div>
            </div>
        </section>
    );
};

export default TrackingDetails;