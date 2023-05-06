import React, { useState } from 'react'
import { colors } from './colors'

export default function Colorpicker () {
  const [currentColor, setCurrentColor] = useState("#ffffff");

  return (
    <>
      <div className="main">
        <div className="grid">
          <div
            className="left-div"
            style={{ backgroundColor: currentColor }}>
          </div>
          <div className="right-div">
            {colors.map((color, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: color, cursor: "pointer" }}
                  className="color-div"
                  onClick={() => setCurrentColor(color)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}
