import React from 'react'
import { MdOutlineEmergencyShare } from "react-icons/md";
import { SiCustomink } from "react-icons/si";
import { MdRecordVoiceOver } from "react-icons/md";

const Capabilities = () => {
  return (
    <div className="capabilities">
        <div className="top-cap">
            <h2>Capabilities</h2>
            <p>
            We offer a wide range of digital solutions and best-in-class platforms to deliver meaningful outcomes, enhance customer experiences, and transform industries at scale and with unparalleled speed.
            </p>
        </div>
        <div className="grid">
                <div className="box">
                    <div className="top-box">
                    <h4>Emergency Service</h4>

                    <div className="icon">
                        <MdOutlineEmergencyShare size={22}/>
                    </div>
                    </div>
                    <div className="content-box">
                        <p>
                        Compassionate support in crisis situations
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="top-box">
                    <h4>Customer Care</h4>
                    <div className="icon">
                        <SiCustomink size={22}/>
                    </div>
                    </div>
                    <div className="content-box">
                        <p>
                        Scalable call centers adapted to task, brand, and industry
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="top-box">
                    <h4>Voice-to-cloud</h4>
                    <div className="icon">
                        <MdRecordVoiceOver size={22}/>
                    </div>
                    </div>
                    <div className="content-box">
                        <p>
                        Modernization of traditional telecommunication platforms and applications
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Capabilities