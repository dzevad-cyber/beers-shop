import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './App.module.scss';

import Header from './features/header/Header';
import HomePage from './pages/home-page/HomePage';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
