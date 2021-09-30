

import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Deals from './pages/Deals';
import Login from './pages/Login';
import Shop from './pages/Shop';
import SignUp from './pages/Signup';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
return (
	<Router as='main'>
	<NavBar />
	<Switch>
		<Route path='/about' component={About} />
		<Route path='/contact' component={Contact} />
		<Route path='/deals' component={Deals} />
		<Route path='/' component={Landing} />
		<Route path='/login' component={Login} />
    	<Route path='/shop' component={Shop} />
		<Route path='/signup' component={SignUp} />
	</Switch>
	<Footer />
	</Router>
);
}

export default App;
