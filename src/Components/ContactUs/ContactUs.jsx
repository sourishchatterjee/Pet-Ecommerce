import React from "react";
import "./ContactUs.css";
import { useState,useEffect } from "react";

const ContactUs = () => {

  const fullText =   'contact-us';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (fullText.length + 1));
    }, 450); // Adjust speed as needed

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="contact-us-container">

      {/* <h2 className="contact-title">CONTACT US</h2> */}
      <div className="heading text-center">
      <h1 className="animation">
        {fullText.slice(0, index)}
        <span className="cursor">|</span>
      </h1>
    </div>


      <div className="contact-us-content">
        <div className="contact-info">
          <h3>Mignonne Pinkpaws Pet Care Private Limited</h3>
          <h4>SaltLake Branch</h4>
          <p>
            Main Office Address: AC 102, Salt Lake Sector 1, Kolkata, West Bengal 700064 <br />
            Phone: +91 1800 571 2149
          </p>
          <h4>Email</h4>
          <p>customercare@pinkpaws.co.in</p>
          <p className="delivery-info">
            We deliver across Eastern India region.
          </p>
        </div>
        <div className="contact-us-right">
          <form className="contact-form">
            <input
              type="text"
              placeholder="Enter Your Name.."
              className="input-field"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="input-field"
            />
            <textarea
              placeholder="Enter Your Messages"
              className="message-field"
            ></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29490.407900560334!2d88.3292626514421!3d22.49288768560655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270dd7067cfe9%3A0x75a2ca90e1966e8b!2sTollygunge%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1724409257824!5m2!1sen!2sin"
          title="Map showing the location of Habra"
          className="map-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
