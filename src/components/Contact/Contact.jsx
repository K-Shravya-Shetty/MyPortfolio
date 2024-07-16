/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div id='contact'className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets talk</h1>
            <p>I am always excited to connect with fellow tech enthusiasts, potential collaborators, and anyone interested in my work. Whether you have a question, a project proposal, or just want to say hello, I would love to hear from you!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <p>Email: 21j14.shravy@sjec.ac.in</p>
                </div>
                <div className="contact-detail">
                    <p>Phone: 9879750675</p>
                </div>
                <div className="contact-detail">
                    <p>Address:Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        <form action="" className="contact-right">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your email</label>
            <input type="email" placeholder="enter your email" name="email"/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="enter your message"></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
