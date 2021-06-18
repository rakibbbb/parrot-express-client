import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const TrackingDetails = (props) => {
    // const [progress, setProgress] = useState(0);
    const booking = props.booking[0];

    const { _id, category, date, deliveryAddress, email, name, phone, pickupAddress, status, totalCost, weight } = booking;
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
        <section className="container mt-5" style={{ width: "70%" }}>
            <div>
                <h5>Order Id: {_id} </h5>
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
            <div className="pl-5 pt-5" ref={ref}>
                <h5>Invoice# {_id}</h5>
                <h6>Date# {date}</h6>
                <hr></hr>
                <h5>Contact Information</h5>
                <h6><strong>Name:</strong> {name}</h6>
                <h6><strong>Email:</strong> {email}</h6>
                <h6><strong>Phone:</strong> {phone}</h6>
                <hr />
                <div className="row">
                    <div className="col-lg-6">
                        <h5>Pickup Address</h5>
                        <hr />
                        <h6>{pickupAddress}</h6>
                    </div>
                    <div className="col-lg-6">
                        <h5>Delivery Address</h5>
                        <hr />
                        <h6>{deliveryAddress}</h6>
                    </div>
                </div>
                <div className="mb-5">
                    <table class="table table-striped mt-5 mb-5">
                        <thead>
                            <tr>
                                <th scope="col">Product Category</th>
                                <th scope="col">Weight (kg)</th>
                                <th scope="col">Price (Taka)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{category}</td>
                                <td>{weight} kg</td>
                                <td>{totalCost} Taka</td>
                            </tr>
                            <tr>
                                <td><strong></strong></td>
                                <td><strong>Total Cost</strong></td>
                                <td>{totalCost} Taka</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-center mt-5"><small>**This is computer generated invoice, no signature required.**</small></p>
            </div>
            <Pdf targetRef={ref} filename="invoice.pdf">
                {({ toPdf }) => <button className="btn btn-dark btn-block pl-5 ml-4" onClick={toPdf}>Download Invoice</button>}
            </Pdf>
        </section>
    );
};

export default TrackingDetails;