import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({selected, setSelected}) {
const [show, setShow] = useState(false);
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setShow(!show)}>
        <div className="size">
          <span>size:</span>
            <p className="selected" >{selected}</p>
          <span className="drop-symbol">-</span>
        </div>
      </div>
      {show && (
      <div className="dropdown-content" >
       {sizes.map((size, i) => (
          <div className="size-item" index ={i} onClick={(e) => 
          { setSelected(size)
            setShow(false)
          }}
          >
          <p>{size}</p>
        </div>
       ))}
      </div>)}
    </div>
  );
}

export default Dropdown;
