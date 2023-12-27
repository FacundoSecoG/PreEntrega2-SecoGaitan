import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
    <div>
        <footer className="bg-dark text-light p-5 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Your company description goes here.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Facebook</a>
                            </li>
                            <li>
                                <a href="#!">Twitter</a>
                            </li>
                            <li>
                                <a href="#!">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="bg-light" />
                    <div className="text-center">
                        <p>&copy; 2023 Your Company Name</p>
                    </div>
                <hr/>
            </div>
        </footer>
    </div> 
    )
}

export default Footer;