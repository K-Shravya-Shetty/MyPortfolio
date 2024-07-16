/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import myphoto from '../../assets/images/myphoto.jpg';
const About = () => {
  return (
    <div id='about'className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-right">
            <div className="about-para">
                <p>I am currently a third-year student in the Computer Science Engineering department at St. Joseph Engineering College.</p>
                <p>In my leisure time, I enjoy immersing myself in music, reading books and creating intricate handmade crafts.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML And CSS</p><hr style={{width:"67%"}}/> 
                </div>
                <div className="about-skill">
                    <p>C and C++</p><hr style={{width:"75%"}}/> 
                </div>
                <div className="about-skill">
                    <p>MySQL</p><hr style={{width:"60%"}}/> 
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width:"50%"}}/> 
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
