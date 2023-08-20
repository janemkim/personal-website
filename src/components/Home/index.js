import './index.css';
import { NavLink } from 'react-router-dom';
import Computer from '../../assets/computer.png';
import Easel from '../../assets/easel.png';
import Lemon from '../../assets/lemon.png';

const Home = () => {
	return (
		<>
			<div className="container">
			<div id="first-page" className="slides">
				<div className='heading-text'>
					<p id="hello">
						Hello
					</p>
					<p id="name-is">
						, my name is Jane
					</p>
				</div>
				<p id="titles">
							software engineer and artist
				</p>
			</div>
			<div id="second-page" className="slides">
				<h1>
					Things I do
				</h1>
				<div className='nav-links'>
					<NavLink 
      	    className="nav-link"
        	  exact="true"
          	activeclassname="active"
          	to="/software">
						<h2>
							Software development
						</h2>
						<img src={Computer} alt="an image of a computer that says hello world"/>
					</NavLink>
					<NavLink 
	          className="nav-link"
  	        exact="true"
    	      activeclassname="active"
      	    to="/art">
						<h2>
							Art
						</h2>
						<img src={Easel} alt="an image of a painting on an easel"/>
					</NavLink>
				</div>
				<NavLink
          className="nav-link"
					id="about"
          exact="true"
          activeclassname="active"
          to="/about">
					<img src={Lemon} alt="an image of a lemon"/>
					<p>
						More about me
					</p>
				</NavLink>
			</div>
			</div>
		</>
	)
};

export default Home;
