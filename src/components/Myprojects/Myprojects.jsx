/* eslint-disable no-unused-vars */
import React from 'react'
import './Myprojects.css'
import project1 from '../../assets/images/project1.png'
import project2 from '../../assets/images/project2.png'
import project3 from '../../assets/images/project3.png'

const Myprojects = () => {
  return (
    <div id='work'className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container">
        <div className="project">
          <img src={project1} alt="Project 1" className="project-image" />
          <p>Product Card : Created a product card using HTML, CSS, and JavaScript. This card not only displayed product details but also included an interactive feature that allowed users to increase the quantity of the item directly on the card.</p>
        </div>
        <div className="project">
          <img src={project2} alt="Project 2" className="project-image" />
          <p>To-Do List : creation of a to-do list application using HTML, CSS, and JavaScript. This application stored tasks in the browsers local storage, ensuring that data persisted across sessions. It featured a user-friendly interface that displayed pending and completed tasks separately. Additionally, users could easily add new tasks and delete existing ones, providing a comprehensive solution for task management</p>
        </div>
        <div className="project">
          <img src={project3} alt="Project 3" className="project-image" />
          <p>Cake shop : A multi-page cake shop website using HTML, CSS, and JavaScript. This project included various pages such as the homepage, product listings, individual product details, and a contact form. The website was designed to be visually appealing and user-friendly, featuring interactive elements.</p>
        </div>
      </div>
    </div>
  )
}

export default Myprojects
