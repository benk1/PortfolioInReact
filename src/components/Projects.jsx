import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';

// import { Link } from 'react-router-dom';

class Projects extends Component {
	render() {
		return (
			<div className="big-container">
				<h3 style={{ color: 'orange' }}>Code Projects</h3>
				<div className="projects-container">
					<div className="project-11">
						<h5>
							<a
								className="project-link"
								href="https://presentationapp-client.herokuapp.com/presenters"
							>
								<p>MERN Full-stack App powered by Bootsrap</p>
								<div>
									<p>Presentation App</p>
									<p>
										This is MERN(Mongodb,Express,ReactJS and NodeJS) full stack
										Application, user can Manage presenters by adding,editing
										and deleting presenters from the database and navigate
										through different pages using react-router-dom.Please
										register to signIn or LogIn so you can have more privilege
										of viewing and operating more CRUD features.Be patient as It
										can take few seconds for the data to load from the server to
										the UI as the site is hosted in Heroku.
									</p>
								</div>
							</a>
						</h5>
					</div>
					<div className="project-1">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/WorldCountries"
								href="https://benk1.github.io/WorldCountries/"
							>
								<p>Reactjs App powered by MaterializeCSS</p>
								<div>
									{/* <i class="fa fa-code fa-2x" aria-hidden="true" /> */}

									<p>WorldCountries</p>
									<p>
										This is an App created using ReactJs ,the data are fetched
										from country API and displayed accordingly,you can visualize
										Countries around the globe and view specific details about a
										specific country including their capital city, population of
										each country, name of a certain country plus their specific
										flag attached to each country. you can search each country
										by Country's name and sort them accordingly.
									</p>
								</div>
							</a>
						</h5>
					</div>

					<div className="project-4">
						<h5>
							<a
								className="project-link"
								href="https://dry-tor-13844.herokuapp.com/movies"
							>
								<p>Reactjs and NodeJs App </p>
								<p>
									Movie Rental App<br></br>
									This is a MERN fUll-stack MovieRental Application, a user can
									View movies only,It uses JWT for authentication, signed in
									users can add and edit movies,while only admin can delete a
									movie. It is built using MongoDb,Express,React and
									NodeJs.Hosted in Heroku. Be patient it can take few seconds to
									load data from the server to the client.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-2">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/counter-App"
								href="https://hardcore-panini-866022.netlify.app/"
							>
								<p>Reactjs App </p>
								<p>Magic Memory Game</p>
								<p>
									This is designed and implemented using Modern React features.
									You need to flip two cards to get the matched cards, if you
									don't get the matched cards keep on trying till you get two
									cards matched, you will win after getting all the pair cards
									matched. Below the game it will show you how many turns you
									have to win the game.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-5">
						<h5>
							<a
								className="project-link"
								href="https://benk1.github.io/CatAPI/"
							>
								<p>Reactjs App </p>
								<p>
									CAT API<br></br>
									This is an Application where you can fetch data from Cat API,
									You can view and search where the cat is from originally and
									see all the important feature about that cat. Upon clicking
									the Name of the cat you can view cat image and more details
									about your favorite cat.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-6">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/AccountBalanceInReact"
								href="https://myfinances-22381.web.app"
							>
								<p>Reactjs and Firebase App</p>
								<p>
									Finance Management App<br></br>
									This is a full stack application, it is implemented by ReactJS
									and Context API to manage the state in the front-end. At the
									back-end we take advantage of firebase functions, firebase
									Database and firebase Authentication. In this app you are able
									to manage your finances by keep track of what you are
									consuming.You need to sign-in or register to see your current
									transaction and be able to add or delete any current
									transaction.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-7">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/Gallery"
								href="https://benk1.github.io/Gallery/"
							>
								<p>Javascript App </p>
								<p>
									Gallery<br></br>
									This is the Gallery of some Integrify stuff, implemented using
									HTML, CSS and vanilla JAVASCRIPT. The Gallery is in slide show
									form where you can click next arrow or next button to view
									next or previous photo, you can view the details of a selected
									photo by clicking details button.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-8">
						<h5>
							<a
								className="project-link"
								href="https://github.com/benk1/rails_tutorial"
							>
								<p>Rails App </p>
								<p> Rails_Tutorial</p>
								<p>Ruby on Rails tutorial application</p>
							</a>
						</h5>
					</div>

					<div className="project-9">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/CountryArrayInReact"
								href="https://array-of-countries.netlify.app"
							>
								<p>Reactjs App </p>

								<p>
									{' '}
									ArrayOfCountriesInReact<br></br>
									This is the project where we are able to search any country in
									the World from a given array, it is implemented using ReactJs.
									There are two buttons where you can choose to search either by
									StartWith or include buttons.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-10">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/tableAssignment"
								href="https://benk1.github.io/tableAssignment/"
							>
								<p>Javascript App </p>
								<p>
									TableGenerator<br></br>
									This is a project where I show case the power of VanillaJS, we
									can build any HTML Table with given inputs, the App is
									implemented using pure vanilla javascript.
								</p>
							</a>
						</h5>
					</div>
				</div>
				<p className="github">
					<a className="about" href="https://github.com/benk1/">
						More Projects On My Github Page
					</a>{' '}
				</p>
			</div>
		);
	}
}

export default Projects;
