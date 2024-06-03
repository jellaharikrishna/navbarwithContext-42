import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutContainer = isDarkTheme
        ? 'dark-about-container'
        : 'light-about-container'

      const aboutHeading = isDarkTheme
        ? 'dark-about-heading'
        : 'light-about-heading'

      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <Navbar />
          <div className={aboutContainer}>
            <img className="about-img" src={aboutImgUrl} alt="about" />
            <h1 className={aboutHeading}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
