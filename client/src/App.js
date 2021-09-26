import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <Router as="main">
      <>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' component={Navbar} />
        </Switch>
        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Deals from './pages/deals';
import Login from './pages/login';
import Shop from './pages/shop';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/contact' component={Contact} />
		<Route path='/deals' component={Deals} />
		<Route path='/landing' component={Landing} />
		<Route path='/login' component={Login} />
    <Route path='/shop' component={Shop} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	</Router>
);
}

export default App;
