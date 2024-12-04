import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="contact-container">
        <div className="contact-header">
            <h1>Contact Us</h1>
            <p>We would love to hear from you,your feedback is our priority.</p>
        </div>

        <div className="contact-form">
            <form>
            <div className="input">
                <input type="text" placeholder='Firstname*'/>
                <input type="text" placeholder='Lastname*'/>
              </div>
              <div className="input">
                <input type="email" placeholder='Email*'/>
                <input type="number" placeholder='Phone*' />
              </div>
              <div className="input">
                <input type="text" placeholder='Company Name'/>
                <input type="text" placeholder='Country/Region'/>
              </div>
              <div className="input">
              <textarea name="" placeholder='How can we help?'></textarea>
              </div>
              

              <button>Submit</button>
            </form>
            <div className="contact-info">
              <div className="top">
                <h4>PrimeLine Communication Inc.</h4>
                <h5>Rwanda Headquartes</h5>
                <p>Kigali,Gasabo</p>
              </div>
              <div className="address">
                <h5>Reach Out</h5>
                  <div className="box">
                  <MdEmail size={22} color='#005ea1'/>
                 <p> Primeline@gmail.com</p>
                  </div>
                  <div className="box">
                  <FaPhone size={22} color='#005ea1'/>
                  <p>+250 790 345 345</p>
                  </div>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default ContactUs