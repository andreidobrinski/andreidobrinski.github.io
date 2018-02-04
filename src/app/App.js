import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import LandingPage from './LandingPage';
import BadlandsBrewing from '../work/BadlandsBrewing';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/work/BadlandsBrewing" component={BadlandsBrewing} />
              <Route path="/" component={LandingPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
