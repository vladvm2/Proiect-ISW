import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Login from './login/Login'
import Register from './register/Register'
import Destinations from './destinations/Destinations'
import Attractions from './attractions/Attractions'
import Flights from './flights/Flights'
import HolidayStays from './holidaystays/HolidayStays'
import Search from './search/Search'
import Help from './help/Help'
import Cancellations from './help/accomodation/Cancellations'
import Modal from './modal/Modal'
import EnglishFlag from './assets/flags/uk.png' // Asigură-te că calea către steag este corectă
import Payments from './help/accomodation/Payments'
import ReservationDates from './help/accomodation/ReservationDates'
import Communications from './help/accomodation/Communications'
import RoomTypes from './help/accomodation/RoomTypes'
import Pricing from './help/accomodation/Pricing'
import CreditCards from './help/accomodation/CreditCards'
import PropertyPolicies from './help/accomodation/PropertyPolicies'
import AdditionalFacilities from './help/accomodation/AdditionalFacilities'
import Security from './help/accomodation/Security'
import AskedQuestions from './help/car-rental/AskedQuestions'
import Responsibilities from './help/car-rental/Responsibilities'
import TravelPlans from './help/car-rental/TravelPlans'
import Insurance from './help/car-rental/Insurance'
import Extras from './help/car-rental/Extras'
import Pay from './help/car-rental/Pay'
import ReservationChanges from './help/car-rental/ReservationChanges'
import Pickup from './help/car-rental/Pickup'
import After from './help/car-rental/After'
import Electric from './help/car-rental/Electric'
import Seats from './help/flight/Seats'
import CheckIn from './help/flight/CheckIn'
import BookFlights from './help/flight/BookFlights'
import Changes from './help/flight/Changes'
import FlightConfirmation from './help/flight/FlightConfirmation'
import MyFlight from './help/flight/MyFlight'
import Payment from './help/flight/Payment'
import Traveler from './help/flight/Traveler'
import FindReservation from './findreservation/FindReservation'
import ResendConfirmation from './resendconfirmation/ResendConfirmation'
import TermsAndConditions from './help/termsandconditions/TermsAndConditions'
import About from './help/about/About'
import PrivacyPolicy from './help/privacypolicy/PrivacyPolicy'
import Claims from './help/insurance/Claims'
import Coverage from './help/insurance/Coverage'
import PolicyTerms from './help/insurance/PolicyTerms'
import General from './help/insurance/General'
import AnulareRezervare from './help/accomodation/AnulareRezervare'
import TaxaAnulare from './help/accomodation/TaxaAnulare'
import ModificareRezervareNerambursabila from './help/accomodation/ModificareRezervareNerambursabila'
import ConfirmareAnulare from './help/accomodation/ConfirmareAnulare'
import PoliticaAnulare from './help/accomodation/PoliticaAnulare'
import MetodeDePlata from './help/accomodation/MetodeDePlata'
import PlataInAvans from './help/accomodation/PlataInAvans'
import ConfirmarePlata from './help/accomodation/ConfirmarePlata'
import PoliticaDePlata from './help/accomodation/PoliticaDePlata'
import TransmitereDateCard from './help/accomodation/TransmitereDateCard'
import PlataCuAltCard from './help/accomodation/PlataCuAltCard'
import DetaliiCardCredit from './help/accomodation/DetaliiCardCredit'
import DebitareCard from './help/accomodation/DebitareCard'
import InformatiiCameraFacilitati from './help/accomodation/InformatiiCameraFacilitati'
import PatSuplimentar from './help/accomodation/PatSuplimentar'
import GasireEmailConfirmare from './help/accomodation/GasireEmailConfirmare'
import PlataIntegralaCopii from './help/accomodation/PlataIntegralaCopii'
import DiferentaCameraDublaTwin from './help/accomodation/DiferentaCameraDublaTwin'
import CheckInInAfaraIntervalului from './help/accomodation/CheckInInAfaraIntervalului'
import ModificariRezervare from './help/accomodation/ModificariRezervare'
import AdresaEmail from './help/accomodation/AdresaEmail'
import ReservationsScreen from './reservation/Reservations'
import SuccessPage from './reservation/SuccesPage'
import CancelledPage from './reservation/CancelledPage'
import { useAuthContext } from './context/AuthContext' // Importă AuthProvider din contextul de autentificare

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('English')
  const [currentFlag, setCurrentFlag] = useState(EnglishFlag) // setează steagul implicit pentru limba inițială

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const setLanguage = (language, flag) => {
    setCurrentLanguage(language)
    setCurrentFlag(flag) // Actualizează steagul curent
    toggleModal()
  }

  return (
    <Router>
      <Navbar
        currentLanguage={currentLanguage}
        currentFlag={currentFlag}
        toggleModal={toggleModal}
      />
      {isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          setLanguage={setLanguage}
          currentLanguage={currentLanguage}
          currentFlag={currentFlag} // Pasează steagul curent la Modal
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/reservations" element={<ReservationsScreen />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancellation" element={<CancelledPage />} />
        <Route path="/holidaystays" element={<HolidayStays />} />
        <Route path="/search" element={<Search />} />
        <Route path="/help" element={<Help />} />
        <Route path="/findreservation" element={<FindReservation />} />
        <Route path="/resendconfirmation" element={<ResendConfirmation />} />
        <Route path="/cancellations" element={<Cancellations />} />
        <Route path="/anularerezervare" element={<AnulareRezervare />} />
        <Route path="/taxaanulare" element={<TaxaAnulare />} />
        <Route
          path="/modificarerezervarenerambursabila"
          element={<ModificareRezervareNerambursabila />}
        />
        <Route path="/confirmareanulare" element={<ConfirmareAnulare />} />
        <Route path="/politicaanulare" element={<PoliticaAnulare />} />
        <Route path="/metodedeplata" element={<MetodeDePlata />} />
        <Route path="/platainavans" element={<PlataInAvans />} />
        <Route path="/confirmareplata" element={<ConfirmarePlata />} />
        <Route path="/politicadeplata" element={<PoliticaDePlata />} />
        <Route path="/transmiteredatecard" element={<TransmitereDateCard />} />
        <Route path="/platacualtcard" element={<PlataCuAltCard />} />
        <Route path="/detaliicardcredit" element={<DetaliiCardCredit />} />
        <Route path="/debitarecard" element={<DebitareCard />} />
        <Route
          path="/informatiicamerafacilitati"
          element={<InformatiiCameraFacilitati />}
        />
        <Route path="/patsuplimentar" element={<PatSuplimentar />} />
        <Route
          path="/gasireemailconfirmare"
          element={<GasireEmailConfirmare />}
        />
        <Route path="/plataintegralacopii" element={<PlataIntegralaCopii />} />
        <Route
          path="/diferentacameradublatwin"
          element={<DiferentaCameraDublaTwin />}
        />
        <Route
          path="/checkininafaraintervalului"
          element={<CheckInInAfaraIntervalului />}
        />
        <Route path="/modificarirezervare" element={<ModificariRezervare />} />
        <Route path="/adresaemail" element={<AdresaEmail />} />

        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/reservationdates" element={<ReservationDates />} />
        <Route path="/communications" element={<Communications />} />
        <Route path="/roomtypes" element={<RoomTypes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/creditcards" element={<CreditCards />} />
        <Route path="/propertypolicies" element={<PropertyPolicies />} />
        <Route
          path="/additionalfacilities"
          element={<AdditionalFacilities />}
        />
        <Route path="/security" element={<Security />} />

        <Route path="/askedquestions" element={<AskedQuestions />} />
        <Route path="/responsibilities" element={<Responsibilities />} />
        <Route path="/travelplans" element={<TravelPlans />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/reservationchanges" element={<ReservationChanges />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/after" element={<After />} />
        <Route path="/electric" element={<Electric />} />

        <Route path="/seats" element={<Seats />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/bookflights" element={<BookFlights />} />
        <Route path="/changes" element={<Changes />} />
        <Route path="/flightconfirmation" element={<FlightConfirmation />} />
        <Route path="/myflight" element={<MyFlight />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/traveler" element={<Traveler />} />

        <Route path="/claims" element={<Claims />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/policyterms" element={<PolicyTerms />} />
        <Route path="/general" element={<General />} />
      </Routes>
    </Router>
  )
}

export default App
