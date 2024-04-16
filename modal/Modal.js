import React from 'react'
import './ModalStyles.css'
import PolskiFlag from '../assets/flags/pl.png'
import MagyarFlag from '../assets/flags/hu.png'
import RomânăFlag from '../assets/flags/ro.png'
import ItalianoFlag from '../assets/flags/it.png'
import EspañolFlag from '../assets/flags/es.png'
import FrançaisFlag from '../assets/flags/fr.png'
import EnglishFlag from '../assets/flags/uk.png'
import USAFlag from '../assets/flags/us.png'
import DeutschFlag from '../assets/flags/de.png'
import ArgentinaFlag from '../assets/flags/ar.png'
import PortuguêsFlag from '../assets/flags/pt.png'
import BrazilFlag from '../assets/flags/br.png'
import NederlandsFlag from '../assets/flags/nl.png'
import MexicFlag from '../assets/flags/mx.png'

import CanadaFlag from '../assets/flags/ca.png'
import JapanFlag from '../assets/flags/jp.png'
import TurkeyFlag from '../assets/flags/tr.png'
import GreeceFlag from '../assets/flags/gr.png'
import UkraineFlag from '../assets/flags/ua.png'
import FinlandFlag from '../assets/flags/fi.png'
import BulgariaFlag from '../assets/flags/bg.png'
import NewZealandFlag from '../assets/flags/nz.png'
import SwedenFlag from '../assets/flags/se.png'
import CroatiaFlag from '../assets/flags/hr.png'
import MoldovaFlag from '../assets/flags/md.png'
import ChinaFlag from '../assets/flags/cn.png'
import PakistanFlag from '../assets/flags/pk.png'
import NigeriaFlag from '../assets/flags/ng.png'
import RussiaFlag from '../assets/flags/ru.png'
import EthiopiaFlag from '../assets/flags/et.png'
import EgiptFlag from '../assets/flags/eg.png'
import VietnamFlag from '../assets/flags/vn.png'
import IranFlag from '../assets/flags/ir.png'
import ThailandFlag from '../assets/flags/th.png'
import EnglandFlag from '../assets/flags/eng.png'
import SouthAfricaFlag from '../assets/flags/za.png'
import TanzaniaFlag from '../assets/flags/tz.png'
import SouthKoreaFlag from '../assets/flags/kr.png'
import ColombiaFlag from '../assets/flags/col.png'
import KenyaFlag from '../assets/flags/ken.png'
import AlgeriaFlag from '../assets/flags/dz.png'
import UgandaFlag from '../assets/flags/ug.png'
import IraqFlag from '../assets/flags/iq.png'
import SudanFlag from '../assets/flags/sd.png'

function Modal({ toggleModal, setLanguage, currentLanguage }) {
  const languages = [
    { name: 'Romanian', flagUrl: RomânăFlag },
    { name: 'English (UK)', flagUrl: EnglishFlag },
    { name: 'English (US)', flagUrl: USAFlag },
    { name: 'Italiano', flagUrl: ItalianoFlag },
    { name: 'Français', flagUrl: FrançaisFlag },
    { name: 'Español (ES)', flagUrl: EspañolFlag },
    { name: 'Deutsch', flagUrl: DeutschFlag },
    { name: 'Español (AR)', flagUrl: ArgentinaFlag },
    { name: 'Português (PT)', flagUrl: PortuguêsFlag },
    { name: 'Português (BR)', flagUrl: BrazilFlag },
    { name: 'Nederlands', flagUrl: NederlandsFlag },
    { name: 'Polski', flagUrl: PolskiFlag },
    { name: 'Magyar', flagUrl: MagyarFlag },
    { name: 'Español (MX)', flagUrl: MexicFlag },
    { name: 'English/Français (CA)', flagUrl: CanadaFlag },
    { name: 'Japan', flagUrl: JapanFlag },
    { name: 'Turkey', flagUrl: TurkeyFlag },
    { name: 'Greece', flagUrl: GreeceFlag },
    { name: 'Ukraine', flagUrl: UkraineFlag },
    { name: 'Finnish', flagUrl: FinlandFlag },
    { name: 'Bulgarian', flagUrl: BulgariaFlag },
    { name: 'English (NZ)', flagUrl: NewZealandFlag },
    { name: 'Sweden', flagUrl: SwedenFlag },
    { name: 'Croatian', flagUrl: CroatiaFlag },
    { name: 'Moldovan', flagUrl: MoldovaFlag },
    { name: 'China', flagUrl: ChinaFlag },
    { name: 'Urdu (PK)', flagUrl: PakistanFlag },
    { name: 'English (NG)', flagUrl: NigeriaFlag },
    { name: 'Russia', flagUrl: RussiaFlag },
    { name: 'Amharic (ET)', flagUrl: EthiopiaFlag },
    { name: 'Arabic (EG)', flagUrl: EgiptFlag },
    { name: 'Vietnamese', flagUrl: VietnamFlag },
    { name: 'Persian (IR)', flagUrl: IranFlag },
    { name: 'Thai (TH)', flagUrl: ThailandFlag },
    { name: 'English (ENG)', flagUrl: EnglandFlag },
    { name: 'English (ZA)', flagUrl: SouthAfricaFlag },
    { name: 'Swahili (TZ)', flagUrl: TanzaniaFlag },
    { name: 'Korean (KR)', flagUrl: SouthKoreaFlag },
    { name: 'Español (COL)', flagUrl: ColombiaFlag },
    { name: 'English (KEN)', flagUrl: KenyaFlag },
    { name: 'Arabic (DZ)', flagUrl: AlgeriaFlag },
    { name: 'English (UG)', flagUrl: UgandaFlag },
    { name: 'Arabic (IQ)', flagUrl: IraqFlag },
    { name: 'Arabic (SD)', flagUrl: SudanFlag },
  ]
  // Asigură-te că funcția handleSetLanguage și variabilele sunt definite în cadrul componentei Modal.
  const handleSetLanguage = languageName => {
    if (typeof setLanguage === 'function') {
      setLanguage(languageName)
    } else {
      console.error('setLanguage prop is not a function!')
    }
  }

  const currentLanguageObj = languages.find(
    lang => lang.name === currentLanguage
  )

  return (
    <div className="language-modal">
      <div className="language-modal-content">
        <button className="close" onClick={toggleModal}>
          &times;
        </button>
        <h2>Choose Language</h2>
        <div className="current-language-display">
          {currentLanguageObj ? (
            <img
              src={currentLanguageObj.flagUrl}
              alt={`${currentLanguageObj.name} Flag`}
              className="language-flag"
            />
          ) : (
            <span className="language-text">Select language</span>
          )}
        </div>
        <ul className="language-list">
          {languages.map(language => (
            <li
              key={language.name}
              className={`language-item ${
                language.name === currentLanguage ? 'selected' : ''
              }`}
              onClick={() => handleSetLanguage(language.name)}
            >
              <img
                src={language.flagUrl}
                alt={`${language.name} Flag`}
                className="language-flag"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Modal
