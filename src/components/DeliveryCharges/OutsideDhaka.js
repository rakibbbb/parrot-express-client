import React from 'react';
import "./DeliveryCharge.css";


const OutsideDhaka = () => {
    return (
        <div className="row">
        <div className="col-lg-2 charge">
          <p>
            Upto 1 kg <br /> <span className="price">&#2547; 120</span>
          </p>
        </div>
        <div className="col-lg-2 charge">
          <p>
            1 kg to 2 kg <br /> <span className="price">&#2547; 150</span>
          </p>
        </div>
        <div className="col-lg-2 charge">
          <p>
            2 kg to 3 kg <br /> <span className="price">&#2547; 180</span>
          </p>
        </div>
        <div className="col-lg-2 charge">
          <p>
            3 kg to 4 kg <br /> <span className="price">&#2547; 210</span>
          </p>
        </div>
        <div className="col-lg-2 charge">
          <p>
            4 kg to 5 kg <br /> <span className="price">&#2547; 240</span>
          </p>
        </div>
        <div className="col-lg-2 charge">
          <p>
            5 kg to 6 kg <br /> <span className="price">&#2547; 270</span>
          </p>
        </div>
      </div>
    );
};

export default OutsideDhaka;