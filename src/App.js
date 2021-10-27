import React, { Component } from 'react';

import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<>
			<NavBar />
			<div className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/projects" component={Projects} />
				</Switch>
			</div>
			<Footer />
		</>
	);
}

export default App;
