import React from 'react'
import './Modal.css';

import topImage1 from "../assets/top-section-images/top-image-1.jpg";
import topImage2 from "../assets/top-section-images/top-image-2.jpg";
import topImage3 from "../assets/top-section-images/top-image-3.jpg";
import topImage4 from "../assets/top-section-images/top-image-4.jpg";
import topImage5 from "../assets/top-section-images/top-image-5.jpg";
import topImage6 from "../assets/top-section-images/top-image-6.jpg";

function Modal(props) {
  

  return (
    <div className="modal-container">
      <span className="close-btn">X</span>
      <div className="image-wrapper">
            <img src={topImage1} className="image" alt="FIRST"/>
            <img src={topImage2} className="image" alt="FIRST"/>
            <img src={topImage3} className="image" alt="FIRST"/>
            <img src={topImage4} className="image" alt="FIRST"/>
            <img src={topImage5} className="image" alt="FIRST"/>
            <img src={topImage6} className="image" alt="FIRST"/>
      </div>
    </div>
  )
}

export default Modal;