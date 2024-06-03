import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const navbarContainer = isDarkTheme
        ? 'dark-navbar-container'
        : 'light-navbar-container'
      const menuHeading = isDarkTheme
        ? 'dark-menu-heading'
        : 'light-menu-heading'

      const websiteLogoImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeLogoImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={navbarContainer}>
          <img
            className="website-logo"
            src={websiteLogoImgUrl}
            alt="website logo"
          />
          <ul className="menu-container">
            <Link to="/" className="nav-link">
              <li className={menuHeading}>Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              <li className={menuHeading}>About</li>
            </Link>
          </ul>
          <button
            className="theme-logo-btn"
            type="button"
            data-testid="theme"
            onClick={onToggleTheme}
          >
            <img className="theme-logo" src={themeLogoImgUrl} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
