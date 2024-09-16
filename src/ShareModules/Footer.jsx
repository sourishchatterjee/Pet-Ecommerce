import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-column">
            <img
              src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBldHN8ZW58MHx8MHx8fDA%3D"
              alt="Waggy Pet Shop Logo"
              className="footer-logo"
            />
            <p className="footer-text">
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-column">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Offer</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="footer-title">Help Center</h5>
            <ul className="footer-list">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Payment</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">Delivery Information</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="footer-title">Our Newsletter</h5>
            <p className="footer-text">
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <div className="newsletter-signup">
              <input
                type="email"
                placeholder="Enter Your Email Here"
                className="footer-input"
              />
              <div>
              <button className="newsletter-btn">Subscribe</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2023 petShop. All rights reserved.</p>
        <p>
          HTML Template by{' '}
          <a
            href="https://www.flipkart.com/search?q=pet%20products%20banners&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
            target="_blank"
            rel="noopener noreferrer"
          >
            profational use age
          </a>
        </p>
        <p>
          Designed by{' '}
          <a
            href="https://themewagon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mr Noob
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
