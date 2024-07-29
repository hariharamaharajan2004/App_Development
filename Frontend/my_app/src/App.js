import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/pages/signup';
import Login from './components/pages/login';
import Companies from './companies';
import Aboutus from './components/pages/aboutus';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/companies" component={Companies} />
          <Route path="/login" component={Login} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/" component={Login} /> {/* Default route to login page */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
