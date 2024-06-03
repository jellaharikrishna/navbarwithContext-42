import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainer = isDarkTheme
        ? 'dark-home-container'
        : 'light-home-container'

      const homeHeading = isDarkTheme
        ? 'dark-home-heading'
        : 'light-home-heading'

      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <>
          <Navbar />
          <div className={homeContainer}>
            <img className="home-img" src={homeImgUrl} alt="home" />
            <h1 className={homeHeading}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
