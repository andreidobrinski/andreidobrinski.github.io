import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'react-tippy/dist/tippy.css';
import theme from './theme';

import LandingPage from './landing-page';
import BadlandsBrewing from '../work/badlands-brewing';
import AlbumPicker from '../work/album-picker';
import Learning from './learning';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/work/album-picker" component={AlbumPicker} />
        <Route path="/work/badlands-brewing" component={BadlandsBrewing} />
        <Route path="/learning" component={Learning} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
