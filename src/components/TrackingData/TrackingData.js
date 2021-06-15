import React, { useState } from 'react';
import { useEffect } from 'react';
import TrackingDetails from '../TrackingDetails/TrackingDetails';

const TrackingData = (props) => {
    let id = props.id;
    // console.log(id)

    //load bookings by id
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [id])

    // console.log(order)
    return (
        <div>
            {
                order.length && <TrackingDetails  booking={order}/>
            }
        </div>
    );
};

export default TrackingData;