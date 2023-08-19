import './index.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className='nav-bar'>
      <Link 
        className="nav-link"
        to="/">
          <p>Jane</p>
      </Link>
      <div className='nav-links'>
		    <NavLink
          className="nav-link"
          exact="true"
          activeclassname="active"
          to="/about">
            <p>About</p>
        </NavLink>
        <NavLink 
          className="nav-link"
          exact="true"
          activeclassname="active"
          to="/software">
          <p>Software</p>
        </NavLink>
        <NavLink 
          className="nav-link"
          exact="true"
          activeclassname="active"
          to="/art">
          <p>Art</p>
        </NavLink>
      </div>
    </div>
  )
}


export default Navbar;