import React from 'react'
import './HeroStyles.css'
import { AiOutlineSearch } from 'react-icons/ai'

// Corrected path to the video file
import Video from '../../assets/balivideo.mp4'

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
      </div>
    </div>
  )
}

export default Hero
