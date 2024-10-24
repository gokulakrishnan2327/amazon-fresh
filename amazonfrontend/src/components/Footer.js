import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Optional for adding styles

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-content">
        <div className="footer-section about">
          <h3>ASPV Fresh Produce Inventory</h3>
          <p>Providing fresh and organic produce directly from farms. Delivering quality, sustainability, and health to your doorstep.</p>
          <br></br><br></br>
        </div>
        <br></br>
        <div className="footer-section links">
          {/* <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/inventory">Products</Link></li>
          </ul> */}
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Information</h3>
          <p>Address: No.45, 1st and 2nd floor, Om Sakthi Nagar, Kasi Towers, Mettukuppam, Vanagaram, Chennai, Tamil Nadu 600095</p>
          <p>Phone: +91 44 1234 5678</p>
          <p>Email: info@aspvgroup.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ASPV GROUP OF COMPANIES | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
