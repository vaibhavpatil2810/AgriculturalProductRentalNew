import React, { useState } from 'react';
import axios from 'axios';
import contactus from './Image/contactus.jpg'; // gives image path

function Contact() {
    return (
        <div className="contact-us-us" 
            style={{
            backgroundImage: `url(${contactus})`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

            <div className="container-fluid ">
                <div className="row justify-content-evenly align-items-center m-5">
                    <h1 align='center' style={{color:'white'}}>Contact Us</h1>

                    <div className="card" style={{ width: "15rem", height: "25rem"}}>
                        <div className="card-body">
                            <h5 className="card-title" align='center'>Mr. Vaibhav Patil</h5>
                            <div>
                                <a href="mailto:vaibhavjr07@gmail.com" className="icon gmail">
                                    <div className="tooltip">Gmail</div>
                                    <span><i className="fab fa-google ms-3"></i></span>
                                </a>
                                <a href="#" className="icon phone">
                                    <div className="tooltip">Phone</div>
                                    <span><i className="fa-solid fa-phone ms-3"></i></span>
                                </a>
                                <a href="https://www.linkedin.com/in/rohan-ghadge-3a5a1817b" className="icon linkedin">
                                    <div className="tooltip">LinkedIn</div>
                                    <span><i className="fab fa-linkedin ms-3"></i></span>
                                </a>
                                <p align='center'>8149676720</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "15rem", height: "25rem"}}>
                        <div className="card-body">
                            <h5 className="card-title" align='center'>Mr. Shivtej Rananaware</h5>
                            <div class="wrapper mb-5">
                                <a href="mailto:shivtejrananaware1801@gmail.com" className="icon gmail">
                                    <div className="tooltip">Gmail</div>
                                    <span><i className="fab fa-google ms-3"></i></span>
                                </a>
                                <a href="#" className="icon phone">
                                    <div className="tooltip">Phone</div>
                                    <span><i className="fa-solid fa-phone ms-3"></i></span>
                                </a>
                                <a href="https://www.linkedin.com/in/shivtej-rananaware-b8aa9125b" className="icon linkedin">
                                    <div className="tooltip">LinkedIn</div>
                                    <span><i className="fab fa-linkedin ms-3"></i></span>
                                </a>
                                <p align='center'>9850499153</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "15rem", height: "25rem"}}>
                        <div className="card-body">
                            <h5 className="card-title" align='center'>Mr. Prathamesh Magdum</h5>
                            <div class="wrapper mb-5">
                                <a href="mailto:prathameshmagdum2611@gmail.com" className="icon gmail">
                                    <div className="tooltip">Gmail</div>
                                    <span><i className="fab fa-google ms-3"></i></span>
                                </a>
                                <a href="#" className="icon phone">
                                    <div className="tooltip">Phone</div>
                                    <span><i className="fa-solid fa-phone ms-3"></i></span>
                                </a>
                                <a href="http://www.linkedin.com/in/sumit-kashid-b63b1a1b8/" className="icon linkedin">
                                    <div className="tooltip">LinkedIn</div>
                                    <span><i className="fab fa-linkedin ms-3"></i></span>
                                </a>
                                <p align='center'>9158619736</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "15rem", height: "25rem"}}>
                        <div className="card-body">
                            <h5 className="card-title" align='center'>Mr. Niranjan Kamble</h5>
                            <div class="wrapper mb-5">
                                <a href="mailto:niranjan.kamble07@gmail.com" className="icon gmail">
                                    <div className="tooltip">Gmail</div>
                                    <span><i className="fab fa-google ms-3"></i></span>
                                </a>
                                <a href="#" className="icon phone">
                                    <div className="tooltip">Phone</div>
                                    <span><i className="fa-solid fa-phone ms-3"></i></span>
                                </a>
                                <a href="http://www.linkedin.com/in/sourab-shinde-826689170" className="icon linkedin">
                                    <div className="tooltip">LinkedIn</div>
                                    <span><i className="fab fa-linkedin ms-3"></i></span>
                                </a>
                                <p align='center'>9545923317</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "15rem", height: "25rem"}}>
                        <div className="card-body">
                            <h5 className="card-title" align='center'>Mr. Ashutosh Bhujbal</h5>
                            <div class="wrapper mb-5">
                                <a href="mailto:aashutoshab7@gmail.com" className="icon gmail">
                                    <div className="tooltip">Gmail</div>
                                    <span><i className="fab fa-google ms-3"></i></span>
                                </a>
                                <a href="#" className="icon phone">
                                    <div className="tooltip">Phone</div>
                                    <span><i className="fa-solid fa-phone ms-3"></i></span>
                                </a>
                                <a href="http://www.linkedin.com/in/ashutosh-bhujbal7" className="icon linkedin">
                                    <div className="tooltip">LinkedIn</div>
                                    <span><i className="fab fa-linkedin ms-3"></i></span>
                                </a>
                                <p align='center'>8080168267</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;