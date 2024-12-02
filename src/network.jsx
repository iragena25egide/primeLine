import React from 'react'

const Network = () => {
  return (
   <div className="network-container">
        <div className="left-network">
        <small>Our Network:</small>
        <h1>
        The Foundation for Modern Solutions
        </h1>
        <p>
        Our fully redundant cloud-based mesh 
        network integrates and transports all 
        forms of data from any device to enhance 
        and personalize the end-user experience.
        </p>
        </div>
        <div className="right-network">
            <div className="item">
                <h1>100M</h1>
                <p>interactions per year</p>
            </div>
            <div className="item">
                <h1>24x7</h1>
                <p>monitoring and data protection</p>
            </div>

            <div className="item">
                <h1>500M</h1>
                <p>
                endpoints able to connect to the PrimeLine cloud through their service providers
                </p>
            </div>

            <div className="item">
                <h1>5</h1>
                <p>
                call centers in North America and abroad
                </p>
            </div>
        </div>
   </div>
  )
}

export default Network