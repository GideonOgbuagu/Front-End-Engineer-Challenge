import React from 'react';
import SlideImage from './SliderImage';
import "./Slider.css"


function Slider({slides}) {
  return (
    <div className="slider-wrapper">
      <ul className="slider-content">
          {slides.map((slide) => (
            <SlideImage slide={slide} key={slide.id}/>
          ))}
      </ul>
    </div>
  )
}

export default Slider;
