import React, { useState } from "react";
import './Colors.css';

function Colors(props) {
  const [black, setBlack] = useState(true);
  const [beige, setBeige] = useState(false);


  return (
    <div className="color-wrapper">
      {/* Color toggle functionality */}
      <span>color</span>
      <span
        onClick={(e) => {
          setBlack(true);
          setBeige(false);
        }}
        className={black ? "check" : null}
      >
        black
      </span>
      <span
        onClick={() => {
          setBeige(true);
          setBlack(false);
        }}
        className={beige ? "check" : null}
      >
        beige
      </span>
    </div>
  );
}


export default Colors;