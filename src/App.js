import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import CoverageMap from "./components/Coverage/CoverageMap";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation";
// import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
// import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Book from "./components/Dashboard/Book/Book";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import Review from "./components/Dashboard/Review/Review";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import MakeManager from "./components/Dashboard/MakeManager/MakeManager";
import AdminDashboard from "./components/Dashboard/AdminDashboard/AdminDashboard";
import ManagerDashboard from "./components/Dashboard/ManagerDashboard/ManagerDashboard";



export const UserContext = createContext();
export const UserContext2 = createContext();
export const UserContext3 = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  let { name, email, token } = loggedInUser;
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const userEmail = sessionStorage.getItem('userEmail');
  if (userEmail !== null) {
    email = userEmail;
  }

  useEffect(() => {
    fetch('http://localhost:5000/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: email })
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [email])

  useEffect(() => {
    fetch('http://localhost:5000/isManager', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: email })
    })
      .then(res => res.json())
      .then(data => setIsManager(data));
  }, [email])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserContext2.Provider value={[isAdmin, setIsAdmin]}>
        <UserContext3.Provider value={[isManager, setIsManager]}>
          <Router>
            <div className="upper-nav">
              <Container>
                <Row>
                  <Col lg={8} md={4} sm={12} className="py-2 header-top">Welcome to ParrotEx</Col>
                  <Col lg={2} md={4} sm={12} className="py-2 header-top">
                    <FontAwesomeIcon icon={faPhoneAlt} /> <a href="tel:01521429924" style={{ textDecoration: "none", color: "black" }}><span>01521429924</span></a>
                  </Col>
                  <Col lg={2} md={4} sm={12} className="py-2 email header-top">
                    <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@parrotex.com" style={{ textDecoration: "none", color: "black" }}><span>info@parrotex.com</span></a>
                  </Col>
                </Row>
              </Container>
            </div>
            <Navigation />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/coverage-map">
                <CoverageMap />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact-us">
                <ContactUs />
              </Route>
              <Route path="/sign-in">
                <SignIn />
              </Route>
              {
                (isManager && !isAdmin) ? (<React.Fragment>
                  <PrivateRoute path="/dashboard">
                    <ManagerDashboard />
                  </PrivateRoute>
                  <PrivateRoute path="/manage-order">
                    <OrderList />
                  </PrivateRoute>
                </React.Fragment>)
                  : (!isAdmin && !isManager) ? (<React.Fragment>
                    <PrivateRoute path="/book">
                      <Book />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard">
                      <BookingList />
                    </PrivateRoute>
                    <PrivateRoute path="/review">
                      <Review />
                    </PrivateRoute>
                  </React.Fragment>)
                    : (<React.Fragment>
                      <PrivateRoute path="/dashboard">
                        <AdminDashboard />
                      </PrivateRoute>
                      <PrivateRoute path="/orderList">
                        <OrderList />
                      </PrivateRoute>
                      <PrivateRoute path="/makeAdmin">
                        <MakeAdmin />
                      </PrivateRoute>
                      <PrivateRoute path="/makeManager">
                        <MakeManager />
                      </PrivateRoute>
                    </React.Fragment>)
              }
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </UserContext3.Provider>
      </UserContext2.Provider>
    </UserContext.Provider>
  );
}

export default App;

