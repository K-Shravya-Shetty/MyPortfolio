/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css';
import myphoto from '../../assets/images/myphoto.jpg';
import resume from '../../assets/images/resume.pdf'; 

const Hero = () => {
  return (
    <div id='home'className='Hero'>
        <img src={myphoto} alt="myphoto"/>
      <h1><span>I am K. Sharvya Shetty,</span> Computer Science Engineering Student</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia id harum libero necessitatibus earum voluptas accusamus consectetur sapiente, sequi adipisci!z</p>
      <div className="hero-action">
        <div className="hero-connect">
        <a href="https://github.com/K-Shravya-Shetty" target="_blank" rel="noopener noreferrer">
        My github link
        </a>
        </div>
        <div className="hero-resume">
        <a href={resume} target="_blank" rel="noopener noreferrer">My resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
