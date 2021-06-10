import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section className="contact-us">
        {/* <img src="images/Contact-us.jpg" alt="" /> */}
        <div className="container pt-5">
          <div className="row">
              <div className="col-lg-7 mt-3">
                  <h6>If you find any problem to send courier or need business inquiries, fill the form and send to us.</h6>
                  
                  <div className="row">
                      <div className="col-lg-6 mb-3">
                          <input type="email" className="form-control" placeholder="Full Name" />
                      </div>
                      <div className="col-lg-6 mb-3">
                          <input type="tel" className="form-control"placeholder="Mobile Number" />
                      </div>
                      <div className="col-lg-6 mb-3">
                          <input type="email" className="form-control" placeholder="Email Address" />
                      </div>
					  <div className="col-lg-6 mb-3">
                          <input type="email" className="form-control" placeholder="Email Address" />
                      </div>
                  </div>
                  
                  <div className="mb-3">
                      <textarea className="form-control" placeholder="Write something here..." rows="6"></textarea>
                  </div>

                  <div className="mb-3 d-grid gap-2">
                      <button type="button" className="btn btn-info btn-lg btn-block">Send</button>
                  </div>

              </div>

              <div className="col-lg-5">
                  <div id="map">
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58430.418874921765!2d90.35798878984812!3d23.75090310805159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8afb926d615%3A0xfabfcc3ea2a8ada!2sNextech%20Limited!5e0!3m2!1sen!2sbd!4v1616650591892!5m2!1sen!2sbd" 
                  width="450" 
                  height="300" 
                  style={{ border: 0, borderRadius: "10px" }} 
                  allowfullscreen="" 
                  loading="lazy"
                  ></iframe>
                      <div>
                        <h5>Our Office Address</h5>
                        <p><FontAwesomeIcon icon={faHome} /> 20/2, West Panthapath, Dhaka-1205, Bangladesh</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> 01521429924</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> support@parrotex.com</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
    );
};

export default ContactUs;