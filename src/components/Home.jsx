import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
	console.log(props);
	return (
		<>
			<div className="kilimanjaro">
				<div className="text">
					<p>
						<h3>
							<span className="highlighted">Hey, I'm Bernard!</span>
						</h3>
						I am a Web developer, I really enjoy developing Apps using different
						Technologies, since my graduation at Metropolia University of
						applied science in Finland-Helsinki, I have been lucky enough to be
						involved in multiple IT projects, but this time, I am in a phase of
						my career where I want to be very close to the user and this is to
						why i pursue this phase of front-end development,apart from that i
						have been involved in back-end development to widen up my knowledge
						of web-development.Beyond the web-development I am currently
						enjoying web-designing.These are just some technologies I have been
						involved with so far:
						<ul>
							<li>HTML / CSS</li>
							<li>Javascript / ES6</li>
							<li>Node.js/Express/MongoDB</li>
							<li>Typescript/Flow-Type checking</li>
							<li>React / Redux</li>
							<li>Ruby / Ruby on Rails</li>
							<li>MySQL</li>
							<li>Flexbox / Bootstrap /Materialize CSS/Reactstrap</li>
							<li>Sass</li>
							<li>Linux OS</li>
							<li>Git/Github/Heroku</li>
							<li>Regular Expressions</li>
						</ul>
						<h4>Check out what I have been up to:</h4>
					</p>

					<div className="Links">
						<NavLink to="/about">
							<button type="button" className="btn btn-primary">
								ABOUT
							</button>
						</NavLink>

						<NavLink to="/projects">
							<button type="button" className="btn btn-primary">
								PROJECTS
							</button>
						</NavLink>

						<NavLink to="/contact">
							<button type="button" className="btn btn-primary">
								CONTACT
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};
export default Home;
