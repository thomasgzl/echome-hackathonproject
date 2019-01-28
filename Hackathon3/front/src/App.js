import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import MyRooms from './containers/MyRooms';
import MonCompte from './components/MonCompte';
import MyHome from './components/MyHome';
import MyBadges from './components/MyBadges';
import PageRegist from './components/PageRegist';
import Community from './components/Community';
import Forum from './components/Forum';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route path="/accueil" component={MyHome} />
          <Route path="/mes-pieces" component={MyRooms} />
          <Route path="/communaute" component={Community} />
          <Route path="/mon-compte" component={MonCompte} />
          <Route path="/mes-badges" component={MyBadges} />
          <Route path="/connexion" component={PageRegist} />
          <Route path="/forum" component={Forum} />
        </Switch>
      </div>
    );
  }
}

export default App;