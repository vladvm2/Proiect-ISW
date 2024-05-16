import React, { useState } from 'react';
import './AboutStyles.css';

function About() {
  const [activeSection, setActiveSection] = useState('about');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="about-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <button
                onClick={() => handleButtonClick('about')}
                className={activeSection === 'about' ? 'active' : ''}
              >
                Despre ExplorVoyage™
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('legal')}
                className={activeSection === 'legal' ? 'active' : ''}
              >
                Juridic
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('legislation')}
                className={activeSection === 'legislation' ? 'active' : ''}
              >
                Actul legislativ privind serviciile digitale
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('terms')}
                className={activeSection === 'terms' ? 'active' : ''}
              >
                Termeni și Condiții
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('work')}
                className={activeSection === 'work' ? 'active' : ''}
              >
                Cum lucram?
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('offices')}
                className={activeSection === 'offices' ? 'active' : ''}
              >
                Birouri in intreaga lume
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('contact')}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contactati-ne
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('press')}
                className={activeSection === 'press' ? 'active' : ''}
              >
                Centru de presa
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('career')}
                className={activeSection === 'career' ? 'active' : ''}
              >
                Oportunitati de cariera
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('development')}
                className={activeSection === 'development' ? 'active' : ''}
              >
                Dezvoltare durabila la ExplorVoyage
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('add')}
                className={activeSection === 'add' ? 'active' : ''}
              >
                Adaugati-va proprietatea
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Content title={activeSection} />
      </main>
    </div>
  );
}

function Content({ title }) {
  const titles = {
    about: 'Despre ExplorVoyage™',
    legal: 'Juridic',
    legislation: 'Actul legislativ privind serviciile digitale',
    terms: 'Termeni și Condiții',
    work: 'Cum lucram?',
    offices: 'Birouri in intreaga lume',
    contact: 'Suport de afaceri',
    press: 'Centru de presa',
    career: 'Oportunitati de cariera',
    development: 'Dezvoltare durabila la BEACHES.',
    add: 'Adaugati-va proprietatea',
  };

  const content = {
    about: `Fondată în 1996 la Amsterdam, ExplorVoyage™ s-a transformat dintr-un mic start-up olandez în una dintre principalele companii de turism digital la nivel mondial. Ca parte a Booking Holdings Inc. (NASDAQ: BKNG), misiunea ExplorVoyage™ este de a face ca explorarea lumii să fie la îndemâna tuturor. Prin investiții în tehnologii care elimină părțile stresante ale călătoriilor, ExplorVoyage™ pune la dispoziția a milioane de călători experiențe memorabile, opțiuni diverse de transport și locuri incredibile de cazare - de la locuințe la hoteluri și multe altele. Fiind una dintre cele mai mari platforme comerciale turistice din lume, atât pentru branduri renumite, cât și pentru antreprenori de orice anvergură, ExplorVoyage™ le permite proprietăților de pe tot globul să aibă expunere globală și să își dezvolte afacerile. Platforma ExplorVoyage™ este disponibilă în 43 de limbi și oferă peste 28 de milioane de unități de cazare raportate în total, dintre care peste 6,6 milioane de unități de cazare în locuințe, apartamente și alte locuri unice de cazare. Indiferent de destinația sau de activitatea dorită, ExplorVoyage™ vă oferă totul la îndemână, cât și asistență non-stop de la serviciul pentru clienți.`,
    legal: 'ExplorVoyage B.V. (compania din spatele ExplorVoyage™) este înregistrată şi are sediul în Amsterdam, Olanda, ("ExplorVoyage", "noi", sau "al nostru"), de unde furnizează un serviciu de rezervări hoteliere online ("Serviciul") pe website-ul său ("Website-ul"), şi este susţinută internaţional de companiile locale ale grupului său (˝companiile de suport˝). Companiile de suport oferă numai suport intern către ExplorVoyage B.V. Companiile de suport nu furnizează Serviciul şi nu deţin, operează sau administrează Website-ul sau oricare alt website. Pentru toate întrebările cu privire la ExplorVoyage, Serviciu (de ex. serviciul de rezervări hoteliere online) şi Website, sau dacă doriţi să trimiteţi orice documente, corespondenţă, notificări sau orice alt tip de comunicări cu privire la ExplorVoyage, Serviciu, Website sau întrebări de presă, vă rugăm să contactaţi direct ExplorVoyage B.V. ExplorVoyage B.V. nu acceptă şi nu recunoaşte nici un domiciliu din nici un loc, locaţie sau birou din lume (de asemenea nici un birou al companiilor sale de suport) altul decât cel care este înregistrat legal în Amsterdam. Companiile de suport nu funcţionează şi nu sunt autorizate să funcţioneze sub nici o formă de proces sau agent al ExplorVoyage B.V. Nici o rezervare nu poate fi făcută printr-o companie de suport',
    legislation:'În conformitate cu obligațiile ExplorVoyage în temeiul Actului legislativ al UE privind serviciile digitale („DSA”), estimăm că numărul mediu lunar de destinatari* ai serviciului Booking.com în Uniunea Europeană în perioada 1 august 2023 - 31 ianuarie 2024 (inclusiv) este cu mult peste 45 de milioane. Aceasta este doar o estimare și se bazează pe datele disponibile în acest moment ale ExplorVoyage și pe îndrumările limitate din cadrul Actului legislativ privind serviciile digitale („DSA”). Această estimare trebuie să fie publicată în conformitate cu DSA și nu trebuie utilizată în niciun alt scop. Metodologiile utilizate pentru estimarea mediei de destinatari finali lunari, așa cum sunt definiți în DSA, necesită raționamente semnificative și contribuție la proiectare, sunt supuse limitărilor de date și altor limitări și, în mod inerent, sunt supuse variațiilor și incertitudinilor statistice. Această estimare poate fi revizuită în sens crescător sau descrescător pe măsură ce ExplorVoyage își perfecționează abordarea și ca răspuns la publicarea metodologiei de către Comisia Europeană.',

    offices: 'ExplorVoyage, înregistrată în Amsterdam, oferă un serviciu de rezervări hoteliere online. Deţine, controlează şi administrează website-ul www.ExplorVoyage.com. Pe plan internațional, Booking.com este susținut de diferite companii locale –puteți vedea mai jos lista cu companiile de suport din întreaga lume. Aceste companii de suport au rolul de a oferi suport la nivel de țară pentru ExplorVoyage. Companiile de suport nu oferă un serviciu de rezervări online și nu dețin, controlează, găzduiesc, administrează sau întrețin website-ul Booking.com (sau orice alt website). ExplorVoyage este domiciliată numai la adresa înregistrată în Amsterdam şi nu la birourile companiilor de suport din întreaga lume. Companiile de suport nu sunt autorizate să acţioneze ca agenţi de servicii sau agenţi de proces ai ExplorVoyage',

  };

  return (
    <>
      <h1>{titles[title]}</h1>
      <p>{content[title]}</p>
    </>
  );
}

export default About;