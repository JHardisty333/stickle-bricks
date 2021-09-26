import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
function App() {
  return (
    <Router as="main">
      <>
        {/* <Navigator /> */}
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;
