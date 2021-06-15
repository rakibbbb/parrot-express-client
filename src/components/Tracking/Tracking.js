import React, { useState } from 'react';
import TrackingData from '../TrackingData/TrackingData';

const Tracking = () => {

    let textInput = React.createRef();
    const [orderId, setOrderId] = useState([]);
    // console.log(orderId);

    function handleClick() {
        setOrderId(textInput.current.value);
        // console.log(textInput.current.value);
    }

    return (
        <section className="container" style={{ height: "600px"}}>
            <div className="pt-5 m-auto" style={{ width: "500px"}}>
                <input className="input-group" ref={textInput} placeholder="Type your order id..." />
                <div className="text-center">
                    <button className="btn btn-success mt-1" onClick={handleClick}>TRACK</button>
                </div>
            </div>
            <TrackingData id={orderId}/>
        </section>
    );
};

export default Tracking;