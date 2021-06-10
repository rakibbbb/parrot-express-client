import { Tab } from "react-bootstrap";
import React from "react";
import { Tabs } from "react-bootstrap";
import InsideDhaka from "./InsideDhaka";
import OutsideDhaka from "./OutsideDhaka";

const DeliveryCharges = () => {
  return (
    <div className="container my-5 pb-5">
        <h1 className="text-center">See your delivery charge</h1>
        <p className="text-center">Take a look at how much it will cost to send a parcel.</p>
      <Tabs defaultActiveKey="inside-dhaka" id="uncontrolled-tab-example">
        <Tab eventKey="inside-dhaka" title="Inside Dhaka">
          <InsideDhaka/>
        </Tab>
        <Tab eventKey="outside-dhaka" title="Outside Dhaka(COD)">
          <OutsideDhaka/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default DeliveryCharges;
