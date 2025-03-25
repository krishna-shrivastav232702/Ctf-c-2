import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import FormPage from './assets/Form';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={FormPage} />
    </Switch>
  );
};

export default App;
