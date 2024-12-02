import React from 'react'

const Smart = () => {
  return (
   <div className="smart-container">
    <div className="top-smart">
    <h1>
    Smart Technology, Human Support, <br></br>and the Data That <span>Connects</span> Them
    </h1>
    <p>
    For 20 years, PrimeLine has developed network communications solutions that combine the best of both worlds:
    </p>
    </div>
    <div className="item">
        <img src="/public/image/graph2.png" alt="" />

        <div className="item-info">
            <h2>Cloud-Based Technology</h2>
            <p>
            Our secure and redundant mesh network collects and transmits all forms of data, safely and reliably, to enhance the customer experience and bolster emergency response services.
            </p>
        </div>
    </div>
    <div className="item">
       

        <div className="item-info">
            <h2>Human Element</h2>
            <p>
            Our trained and dedicated call center agents can mobilize quickly to provide brand- and industry-specific support, both in crisis and customer care situations.
            </p>
        </div>
        <img src="/public/image/graph3.png" alt="" />
    </div>
   </div>
  )
}

export default Smart