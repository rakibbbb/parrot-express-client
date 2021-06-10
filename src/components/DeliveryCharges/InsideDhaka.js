import React from "react";
import "./DeliveryCharge.css";

const InsideDhaka = () => {
  return (
    <div className="row">
      <div className="col-lg-2 charge">
        <p>
          Upto 1 kg <br /> <span className="price">&#2547; 60</span>
        </p>
      </div>
      <div className="col-lg-2 charge">
        <p>
          1 kg to 2 kg <br /> <span className="price">&#2547; 75</span>
        </p>
      </div>
      <div className="col-lg-2 charge">
        <p>
          2 kg to 3 kg <br /> <span className="price">&#2547; 90</span>
        </p>
      </div>
      <div className="col-lg-2 charge">
        <p>
          3 kg to 4 kg <br /> <span className="price">&#2547; 105</span>
        </p>
      </div>
      <div className="col-lg-2 charge">
        <p>
          4 kg to 5 kg <br /> <span className="price">&#2547; 120</span>
        </p>
      </div>
      <div className="col-lg-2 charge">
        <p>
          5 kg to 6 kg <br /> <span className="price">&#2547; 135</span>
        </p>
      </div>
    </div>
  );
};

export default InsideDhaka;
