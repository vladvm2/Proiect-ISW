import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Bali1 from '../assets/bali1.png'
import Bali2 from '../assets/bali2.png'
import Bali3 from '../assets/bali3.png'
function ImgCarousel() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
      >
        <div>
          <img src={Bali1} alt="/" />
          {/* <p className="legend">Bali1</p> */}
        </div>
        <div>
          <img src={Bali2} alt="/" />
          {/* <p className="legend">Bali2</p> */}
        </div>
        <div>
          <img src={Bali3} alt="/" />
          {/* <p className="legend">Bali3</p> */}
        </div>
      </Carousel>
    </div>
  )
}

export default ImgCarousel
