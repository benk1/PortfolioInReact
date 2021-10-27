import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="header">
			<ul className="headerStyle">
				<li>
					<NavLink
						to="/"
						style={{ textDecoration: 'none' }}
						className="linkStyle"
					>
						Home
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/about"
						style={{ textDecoration: 'none' }}
						className="linkStyle"
					>
						About
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/projects"
						style={{ textDecoration: 'none' }}
						className="linkStyle"
					>
						Projects
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/contact"
						style={{ textDecoration: 'none' }}
						className="linkStyle"
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

// const headerStyle = {
// 	background: '#000000',
// 	textAlign: 'justify',
// 	padding: '10px',
// };

// const linkStyle = {
// 	color: '#fff',
// 	textDecoration: 'none',
// 	fontSize: '20px',
// };
export default NavBar;
