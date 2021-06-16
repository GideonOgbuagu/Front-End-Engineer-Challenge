import React from 'react';
import './App.css';
import topImage1 from './assets/top-section-images/top-image-1.jpg';
import topImage2 from './assets/top-section-images/top-image-2.jpg';
import topImage3 from './assets/top-section-images/top-image-3.jpg';
import topImage4 from './assets/top-section-images/top-image-4.jpg';
import topImage5 from './assets/top-section-images/top-image-5.jpg';
import topImage6 from './assets/top-section-images/top-image-6.jpg';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-description">
          <h5></h5>
          <p>Heavy days. Holds up to 2 tampon's worth</p>
          <p>The phrase "treat yo'self" reaches new belly-button brushing heights with the Hi-Waist, and it's here just in time for cutting season.</p>
        </div>
        <div className="top-images">
          <img className="top-image-1" src={topImage1} alt="HI WAIST (ONE)"/>
          <img className="top-image-2" src={topImage2} alt="HI WAIST (TWO)"/>
          <img className="top-image-3" src={topImage3} alt="HI WAIST (THREE)"/>
          <img className="top-image-4" src={topImage4} alt="HI WAIST (FOUR)"/>
          <img className="top-image-5" src={topImage5} alt="HI WAIST (FIVE)"/>
          <img className="top-image-6" src={topImage6} alt="HI WAIST (SIX)"/>
        </div>
        <div className="top-add-to-cart">
          <div></div>
        </div>
      </header>

      <section className="first-section">

      </section>
      <section className="second-section">

      </section>
      <section className="third-section">

      </section>    
    </div>
  );
}

export default App;
