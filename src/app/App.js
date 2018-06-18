import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import LandingPage from './landing-page';
import BadlandsBrewing from '../work/badlands-brewing';
import AlbumPicker from '../work/album-picker';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/work/album-picker" component={AlbumPicker} />
        <Route path="/work/badlands-brewing" component={BadlandsBrewing} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
