/* eslint-disable no-unused-vars */
import React from 'react';
import './Certificates.css';
import certificate1 from '../../assets/images/certificate1.png';
import certificate2 from '../../assets/images/certificate2.png';
import certificate3 from '../../assets/images/certificate3.png';


const Certificate = () => {
  return (
    <div id='certificate'className="mycertificates">
      <div className="mycertificates-title">
        <h1>My Certificates</h1>
      </div>
      <div className="mycertificates-container">
        <div className="certificate">
        <img src={certificate1} alt="Certificate 1" className="certificate-image" />
          <p>Cisco: Introduction to Networks</p>
        </div>
        <div className="certificate">
          
          <img src={certificate2} alt="Certificate 2" className="certificate-image" />
        
        <p>Intership : Motion Cut</p>
      </div>
      <div className="certificate">
          
          <img src={certificate3} alt="Certificate 3" className="certificate-image" />
        
        <p>Hackathon : Participation certificate</p>
      </div>
      </div>
    </div>
  );
};

export default Certificate;
