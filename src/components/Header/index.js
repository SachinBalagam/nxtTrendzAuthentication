import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="website-logo"
      />
      <div className="menu-button-container">
        <ul className="menu-container">
          <li className="each-menu">Home</li>
          <li className="each-menu">Products</li>
          <li className="each-menu">Cart</li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header
