import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const TrackingDetails = (props) => {
    const booking = props.booking[0];
    console.log(booking)
    // let status = booking.status;
    // console.log(status)
    // let p = 73;
    // const progress = (s) => {
    //     if(s === 'pending'){
    //         let percent = 20;
    //     }
    // } 
    // progress(status);

    return (
        <section className="container mt-5" style={{ width: "70%" }}>
            {/* <div className="mb-3">
                <h5>Order Id: {booking._id}</h5>
                <h5>Order Status:</h5>
            </div> */}
            <div style={{ width: "90% " }}>
            <h5>Order Status:</h5>
            <ProgressBar>
                <ProgressBar striped variant="success" now={12} key={1} />
            </ProgressBar>
            </div>
            <div className="pl-5">
                <div className="d-inline-block" style={{ width: "20%" }}>Pending</div>
                <div className="d-inline-block" style={{ width: "20%" }}>Confirm</div>
                <div className="d-inline-block" style={{ width: "20%" }}>Picked</div>
                <div className="d-inline-block" style={{ width: "20%" }}>Shiped</div>
                <div className="d-inline-block" style={{ width: "20%" }}>Delivered</div>
            </div>
        </section>
    );
};

export default TrackingDetails;