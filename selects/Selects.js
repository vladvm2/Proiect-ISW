import React from 'react'
import './SelectsStyles.css'
import Bali1 from '../assets/bali1.png'
import Bali2 from '../assets/bali2.png'
import Bali3 from '../assets/bali3.png'
import Maldives from '../assets/maldives.png'

import SelectsImg from '../SelectsImg/SelectsImg'

function Selects() {
  return (
    <div className="selects">
      <div className="container">
        <SelectsImg bgImg={Bali1} text="Bali1" />
        <SelectsImg bgImg={Bali2} text="Bali2" />
        <SelectsImg bgImg={Bali3} text="Bali3" />
        <SelectsImg bgImg={Maldives} text="Maldives" />
      </div>
    </div>
  )
}

export default Selects
