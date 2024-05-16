import React from 'react'
import './SelectsImgStyles.css'

function SelectsImg({ bgImg, text }) {
  return (
    <div className="selects-img">
      <img src={bgImg} alt={text} />
      <div className="overlay">
        <h3>{text}</h3>
      </div>
    </div>
  )
}

export default SelectsImg
