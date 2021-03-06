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
import Terms from './pages/Terms';
import Shipping from './pages/Shipping';

function App() {
return (
	<Router as='main'>
		{/* <> */}
		<NavBar />
		<Switch>
			<Route exact path='/about' component={About} />
			<Route exact path='/contact' component={Contact} />
			<Route exact path='/deals' component={Deals} />
			<Route exact path='/' component={Landing} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/shop' component={Shop} />
			<Route exact path='/signup' component={SignUp} />
			<Route exact path='/Cart' component={Cart} />
			<Route exact path='/Terms' component={Terms} />
			<Route exact path='/Shipping' component={Shipping} />		
		</Switch>
		<Footer />
		{/* </> */}
	</Router>
);
}

export default App;
