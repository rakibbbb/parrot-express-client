import React, { useEffect, useState } from "react";
import serviceData from "../../assets/data/serviceData.json";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState(serviceData);
  useEffect(() => {
    setServices(serviceData);
  }, []);
  return (
    <div className="container my-5 text-justify">
        <h2 className="mb-5 text-center">Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
