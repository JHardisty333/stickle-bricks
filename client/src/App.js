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
