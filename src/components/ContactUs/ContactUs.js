import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css'
import { UserContext } from '../../App';
import emailjs from 'emailjs-com';

const ContactUs = () => {

    const [loggedInUser] = useContext(UserContext);
    let { name, email } = loggedInUser;
    const userEmail = sessionStorage.getItem('userEmail');
    const userName = sessionStorage.getItem('userName');
    if (userEmail !== null) {
        email = userEmail;
        name = userName;
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9bxmbhn', 'template_vevwz3x', e.target, 'user_ZzEvEwvtxURPWjjEza2Oe')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      }

    return (
        <section className="contact-us">
            {/* <img src="images/Contact-us.jpg" alt="" /> */}
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-7 mt-3">
                        <h6>If you find any problem to send courier or need business inquiries, fill the form and send to us.</h6>

                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <input type="text" defaultValue={name} className="form-control" placeholder="Full Name" name="name" />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <input type="tel" className="form-control" placeholder="Mobile Number" name="mobile" />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <input type="email" defaultValue={email} className="form-control" placeholder="Email Address" name="email"/>
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <textarea className="form-control" placeholder="Write your messages here..." rows="6" name="message"></textarea>
                            </div>

                            <div className="mb-3 d-grid gap-2">
                                <button type="submit" className="btn btn-info btn-lg btn-block">Send</button>
                            </div>
                        </form>

                    </div>

                    <div className="col-lg-5">
                        <div id="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58430.418874921765!2d90.35798878984812!3d23.75090310805159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8afb926d615%3A0xfabfcc3ea2a8ada!2sNextech%20Limited!5e0!3m2!1sen!2sbd!4v1616650591892!5m2!1sen!2sbd"
                                title="NexTech"
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