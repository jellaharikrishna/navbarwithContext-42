import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notfoundContainer = isDarkTheme
        ? 'dark-notfound-container'
        : 'light-notfound-container'

      const notfoundHeading = isDarkTheme
        ? 'dark-notfound-heading'
        : 'light-notfound-heading'

      const notfoundDescription = isDarkTheme
        ? 'dark-notfound-description'
        : 'light-notfound-description'

      return (
        <>
          <Navbar />
          <div className={notfoundContainer}>
            <img
              className="notfound-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={notfoundHeading}>Lost Your Way?</h1>
            <p className={notfoundDescription}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
