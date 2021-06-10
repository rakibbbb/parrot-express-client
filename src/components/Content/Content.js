import React from "react";
import Coverage from "../Coverage/Coverage";
import Review from "../ShowReview/ShowReview";
import DeliveryCharges from "../DeliveryCharges/DeliveryCharges";
import Services from "../Services/Services";
import Title from "../Title/Title";
import ShowReview from "../ShowReview/ShowReview";

const Content = () => {
  return (
    <div>
        <Title />
        <Services/>
        <Coverage/>
        <DeliveryCharges/>
        <ShowReview />
    </div>
  );
};

export default Content;
