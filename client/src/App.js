

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
import Cart from './pages/Cart';

function App() {
return (
	<Router as='main'>
		
		<NavBar />
		<Switch>
			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/deals' component={Deals} />
			<Route path='/landing' component={Landing} />
			<Route path='/Login' component={Login} />
			<Route path='/Shop' component={Shop} />
			<Route path='/signup' component={SignUp} />
			<Route path='/cart' component={Cart} />
		</Switch>
		<Footer />
	
	</Router>
);
}

export default App;
