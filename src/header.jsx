import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="/public/image/logo.png" width={250} height={80} />
      </div>
      <div className="menu">
          <ul>
            <li>ABOUT US</li>
            <li>CAPABILITIES</li>
            <li>INDUSTRIES</li>
            <li>INSHIGHT</li>
            <li>CAREERS</li>
          </ul>
      </div>
      <div className="contact">
          <div className="contact-button">
            Contact Us
          </div>
      </div>
    </div>
  )
}

export default Header