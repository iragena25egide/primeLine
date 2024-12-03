import React from 'react'


import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
        <div className="footer-top">
            <div className="left-top-footer">
                <h2>Careers</h2>

                <p>Gain a heritage.Leave a legacy.</p>

                <button>JOIN US</button>
            </div>
            <div className="right-top-footer">
            <h2>Contact Us</h2>

            <p>What can we help you achieve.</p>

            <button>SPEAK WITH US</button>
            </div>
        </div>
        <div className="footer-content">
            <div className="logo">
                <h4>Prime Line</h4>
            </div>
            <div className="brand">
                <h4>Our Brand</h4>
                <p>Sustainability</p>
                <p>Corporate Citizenship</p>
                <p>Investor Relations</p>
                <p>Contact Us</p>
            </div>
            <div className="news">
                <h4>News</h4>
                <p>Events</p>
                <p>Careers</p>
                <p>Alumni</p>
                <p>Sitemap</p>
                <p>Cookie Preferences</p>
            </div>
            <div className="media">
                <FaFacebook color='#FEFEFE' size={26}/>
                <FaInstagram color='#FEFEFE' size={26}/>
                <RiTwitterXFill color='#FEFEFE' size={26}/>
                <FaLinkedin color='#FEFEFE' size={26}/>
                <FaYoutube color='#FEFEFE' size={26}/>
            </div>
        </div>
        <div className="footer-bottom">
        <p>&copy;{currentYear} PrimeLine. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer