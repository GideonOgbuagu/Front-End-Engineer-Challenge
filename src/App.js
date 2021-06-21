import React, { useState, useEffect } from "react";
import Colors from "./components/Colors";
import Quantity from "./components/Quantity";
import Dropdown from "../src/components/Dropdown";
import Modal from "./components/Modal"
import "./App.css";
import topImage1 from "./assets/top-section-images/top-image-1.jpg";
// import topImage2 from "./assets/top-section-images/top-image-2.jpg";
// import topImage3 from "./assets/top-section-images/top-image-3.jpg";
// import topImage4 from "./assets/top-section-images/top-image-4.jpg";
// import topImage5 from "./assets/top-section-images/top-image-5.jpg";
// import topImage6 from "./assets/top-section-images/top-image-6.jpg";

import sectnOneImage1 from "./assets/bottom-section-images/sectionone-img-1.jpg";
import sectnOneImage2 from "./assets/bottom-section-images/sectionone-img-2.jpg";
import sectnTwoImage from "./assets/bottom-section-images/sectiontwo-img.jpg";
import sectnThreeImage1 from "./assets/bottom-section-images/sectionthree-img-1.jpg";
import sectnThreeImage2 from "./assets/bottom-section-images/sectionthree-img-2.jpg";

function App() {
  const [selected, setSelected] = useState("");
  const [showModal, setShowModal] = useState(false)
  

  return (
    <div>
      <Modal />
      <div className="App">
          <header className="App-header">
            {" "}
            {/* header starts here */}
            <div className="header-wrapper">
              <div className="top-description">
                <p>HI - WAIST</p>
                <p>Heavy days. Holds up to 2 tampon's worth</p>
                <p>The phrase "treat yo'self" reaches new belly-button brushing heights with the Hi-Waist, and it's here just in time for cutting season.</p>
              </div>
              <div className="top-images">
                <img className="top-image-1" src={topImage1} alt="HI WAIST (ONE)" />
                {/* <img className="top-image-2" src={topImage2} alt="HI WAIST (TWO)"/>
            <img className="top-image-3" src={topImage3} alt="HI WAIST (THREE)"/>
            <img className="top-image-4" src={topImage4} alt="HI WAIST (FOUR)"/>
            <img className="top-image-5" src={topImage5} alt="HI WAIST (FIVE)"/>
            <img className="top-image-6" src={topImage6} alt="HI WAIST (SIX)"/> */}
              </div>
              <div className="add-to-cart-wrapper">
                <p>$35.00</p>
                <div className="features-wrapper">
                  <Colors />
                  <Quantity />
                  <Dropdown selected={selected} setSelected={setSelected} />
                  <p className="size-question">what's my size?</p>
                </div>
                <div>add to cart</div>
                <p>build a cycle set and save up to 20%</p>
                {/* <i class="fas fa-user"></i>  */}
              </div>
            </div>
          </header>{" "}
          {/* header ends here */}
          <div className="section-container">
            <section className="first-section">
              {" "}
              {/* first section starts here */}
              <div className="section1-card1">
                <img className="sectionone-img-1" src={sectnOneImage1} alt="Hiphugger" />
                <div className="card-img-descrip">
                  <p>Shop Hiphugger</p>
                  <p>heavy days</p>
                </div>
              </div>
              <div className="section1-card2">
                <img className="sectionone-img-2" src={sectnOneImage2} alt="Cheeky" />
                <div className="card-img-descrip">
                  <p>Shop Cheeky</p>
                  <p>light days</p>
                </div>
              </div>
            </section>{" "}
            {/* first section ends here */}
            <section className="second-section">
              {" "}
              {/* second section starts here */}
              <div className="section2-card">
                <img className="sectiontwo-img-2" src={sectnTwoImage} alt="Hiphugger" />
                <div className="card-img-descrip">
                  <p>Shop Thong</p>
                  <p>lightest days</p>
                </div>
              </div>
            </section>{" "}
            {/* second section ends here */}
            <section className="first-section">
              {" "}
              {/* third section starts here */}
              <div className="section1-card1">
                <img className="sectionone-img-1" src={sectnThreeImage1} alt="Hiphugger" />
                <div className="card-img-descrip">
                  <p>Shop Sport</p>
                  <p>medium days</p>
                </div>
              </div>
              <div className="section1-card2">
                <img className="sectionone-img-2" src={sectnThreeImage2} alt="Cheeky" />
                <div className="card-img-descrip">
                  <p>Shop Boyshort</p>
                  <p>light days</p>
                </div>
              </div>
            </section>{" "}
            {/* third section ends here */}
          </div>
      </div>
    </div>
  );
}

export default App;
