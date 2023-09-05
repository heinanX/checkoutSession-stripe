import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className="services">
        <h3>Services:</h3>
        <li>Book an eye test</li>
        <li>Eye test at home</li>
        <li>Eyecare at work</li>
        <li>Contact lenses fitting</li>
        <li>Book a Personal Shopper</li>
      </ul>
      <ul className="eye-health">
        <h3>Eye Health:</h3>
        <li>Eye health</li>
        <li>NHS glasses</li>
        <li>Eye exorcises</li>
        <li>Children's eyecare</li>
        <li>Help & FAQs</li>
      </ul>
      <ul className="about">
        <h3>About:</h3>
        <li>About CoolSpecs</li>
        <li>Contact us</li>
        <li>Terms & Conditions</li>
        <li>Sustainability</li>
        <li>News</li>
        <li>Careers</li>
      </ul>
    </footer>
  )
}

export default Footer