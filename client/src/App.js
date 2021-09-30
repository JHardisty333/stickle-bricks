// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Landing from './pages/Landing';
// import Navbar from './components/Navbar/index';

// // function App() {
// //   return (
// //     <Router as="main">
// //       <>
// //         {/* <Navbar /> */}
// //         <Switch>
// //           <Route exact path='/' component={Navbar} />
// //         </Switch>
// //         {/* <Footer /> */}
// //       </>
// //     </Router>
// //   );
// // }

// export default App;

// @font-face {
//     font-family: HelveticaNeue-Bold;
//     local('HelveticaNeue-Bold'), url(./fonts/HelveticaNeue-Bold.ttf);
// }

import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
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
	<Router>
	<NavBar />
	
	{/* <NavLink activeClassName='active' to='/about'>About</NavLink> */}

	<Switch>
		<Route path='/about' component={About} />
		<Route path='/contact' component={Contact} />
		<Route path='/deals' component={Deals} />
		<Route path='/' component={Landing} />
		<Route path='/login' component={Login} />
    	<Route path='/shop' component={Shop} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	<Footer />
	</Router>
);
}

export default App;
