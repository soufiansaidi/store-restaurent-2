import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ApplicationContextProvider } from './Context/ApplicationContext'
import { DataContextProvider } from './Context/DataContext'

import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <ApplicationContextProvider>
        <DataContextProvider>
          <Switch>
            <Route path="/" exact><Home /></Route>
          </Switch>
        </DataContextProvider>
      </ApplicationContextProvider>
    </Router>
  );
}

export default App;
