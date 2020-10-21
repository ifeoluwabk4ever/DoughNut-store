import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import $ from 'jquery'
import Popper from 'popper.js'
import { Switch, Route } from 'react-router-dom'
import NavContact from './components/NavContact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SingleChop from './pages/SingleChop';
import {Chops} from './pages/Chops';
import {Error} from './pages/Error';


export default class App extends Component {
	render() {
		return (
			<>
				<NavContact /><hr style={{margin: 0}}/>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/contact-us" component={ContactUs} />
					<Route exact path='/menu/:chop' component={SingleChop}/>
					<Route exact path="/about-us" component={AboutUs} />
					<Route exact path='/menu' component={Chops}/>
					<Route component={Error} />
				</Switch>
				<Footer />
			</>
		)
	}
}
