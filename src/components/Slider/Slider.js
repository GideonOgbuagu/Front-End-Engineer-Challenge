import React, { useState } from 'react';
import SlideImage from './SliderImage';
import TrackImage from './TrackImage';
import "./Slider.css"


function Slider({slides}) {
  const [slideIndex, setSlideIndex] = useState(4)
  return (
    <div className="slider-wrapper">
      <TrackImage {...{slideIndex}} slideWidth={40}>
      <ul className="slider-content">
          {slides.map((slide, i) => (
            <li>
              <SlideImage slide={slide} key={slide.id}/>
              
            </li>
            
          ))}
      </ul>
      </TrackImage>
    </div>
  )
}

export default Slider;
