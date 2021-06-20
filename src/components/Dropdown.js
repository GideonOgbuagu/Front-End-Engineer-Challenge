import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown() {
const [show, setShow] = useState(false)


  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setShow(!show)}>
        <div className="size">
          <span>size</span>
          <span className="drop-symbol">-</span>
        </div>
      </div>
      {show && (<div className="dropdown-content">
        <div className="size-item">
          <p>XS</p>
        </div>
        <div className="size-item">
          <p>S</p>
        </div>
        <div className="size-item">
          <p>M</p>
        </div>
        <div className="size-item">
          <p>L</p>
        </div>
        <div className="size-item">
          <p>XL</p>
        </div>
        <div className="size-item">
          <p>XXL</p>
        </div>
      </div>)}
    </div>
  );
}

export default Dropdown;
