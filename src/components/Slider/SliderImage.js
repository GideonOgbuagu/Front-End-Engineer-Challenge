import React from 'react'
import './SliderImage.css';

function SliderImage({slide}) {
  return (
    <picture className="slider-image-wrapper">
      {/* <source media="(min-width: 1280px)" srcSet={`${slides.url}`} />
      <source media="(min-width: 768px)" srcSet={`${slides.url}`} />
      <source media="(min-width: 576px)" srcSet={`${slides.url}`} /> */}
      <img className="slider-image" src={slide.url} alt=""/>
    </picture>
  )
}

export default SliderImage;
