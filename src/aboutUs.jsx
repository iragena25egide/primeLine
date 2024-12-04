import React from 'react'
import { TiGroup } from "react-icons/ti";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
        <div className="about-top">
            <div className="top-left-content">
                <h4>Experience the Call Center with PrimeLine</h4>
              <p>
                conveys the forward-thinking nature of Posinnove's solution, emphasizing its interactive and innovative approach to education. Through this platform, users are offered a glimpse into a future where technology enhances learning outcomes, fosters engagement, and prepares learners for success in a rapidly evolving digital world.
                </p>
            </div>
            <img src="public/image/future_bg.png" alt="" />
        </div>
        <div className="about-container">
          <div className="box">
              <h4>Description</h4>
              <p>PrimeLine is a groundbreaking online platform transforming education through immersive, hands-on learning experiences that bridge theory with practice, fostering collaboration and readiness for the contemporary world.</p>
          </div>
          <div className="box">
              <h4>Our mission</h4>
              <p>PrimeLine mission is to revolutionize education by empowering students with hands-on learning experiences, cultivating creativity, critical thinking, and problem-solving skills to inspire lifelong learning and success in the modern era.</p>
          </div>
          <div className="box">
              <h4>Our vision</h4>

              <p>Long-Term Vision Posinnove aspires to be a catalyst for positive change in the African education landscape.</p>
          </div>
        </div>
        <div className="about-bottom">
            <img src="public/image/graph2.png" alt="" />
            <div className="story">
                <h4>Our Story</h4>

                <p>
                In Kigali, Rwanda, Bonheur, a driven student, observed the disparity between classroom teachings and practical skills needed for success. Motivated by this gap, he envisioned Posinnove, an online platform to bridge theory with practice in education. With determination and a dedicated team, they overcame challenges to create Posinnove, empowering Rwandan students with hands-on learning experiences.
                Despite hurdles, Posinnove's launch captivated the education sector, inspiring learners and educators alike. Today, Posinnove continues to revolutionize education, embodying the power of student-led innovation in Rwanda and beyond.
                </p>
            </div>
        </div>

        <div className="values">
          <h4>Our Cole Values</h4>

          <div className="block">
            <TiGroup size={30} color='#005ea1'/>
            <div className="right">
                <h2>Team Work</h2>
                <p>Teamwork is a core value of our team, fostering collaboration, synergy, and mutual support to achieve our shared objectives effectively.</p>
            </div>
          </div>
          <div className="block">
            <TiGroup size={30} color='#005ea1'/>
            <div className="right">
                <h2>Ownership</h2>
                <p>Teamwork is a core value of our team, fostering collaboration, synergy, and mutual support to achieve our shared objectives effectively.</p>
            </div>
          </div>
          <div className="block">
            <TiGroup size={30} color='#005ea1'/>
            <div className="right">
                <h2>Accountability</h2>
                <p>Teamwork is a core value of our team, fostering collaboration, synergy, and mutual support to achieve our shared objectives effectively.</p>
            </div>
          </div>
          <div className="block">
            <TiGroup size={30} color='#005ea1'/>
            <div className="right">
                <h2>Collaboration</h2>
                <p>Teamwork is a core value of our team, fostering collaboration, synergy, and mutual support to achieve our shared objectives effectively.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs