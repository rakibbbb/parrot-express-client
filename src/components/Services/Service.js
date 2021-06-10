import React from "react";

const Service = (props) => {
  // console.log(props.service);
  const { picture, title, description } = props.service;
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <img style={{ height:"150px"}} src={picture} alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.substring(0,190)}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
