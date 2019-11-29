import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'react-tippy/dist/tippy.css';
import theme from './theme';
import LandingPage from '../landing-page';
import LifeTales from '../work/lifetales';
import AlbumPicker from '../work/album-picker';
import BadlandsBrewing from '../work/badlands-brewing';
import Learning from '../learning';
import AnalyticsWrap from './analytics/wrap';
import RlInventory from '../work/rl-inventory';
import GymTodo from '../work/gym-todo';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <AnalyticsWrap>
          <Route exact path="/gym-todo" component={GymTodo} />
          <Route exact path="/lifetales" component={LifeTales} />
          <Route exact path="/rl-inventory" component={RlInventory} />
          <Route exact path="/albumpicker" component={AlbumPicker} />
          <Route exact path="/badlands-brewing" component={BadlandsBrewing} />
          <Route exact path="/learning" component={Learning} />
          <Route exact path="/" component={LandingPage} />
        </AnalyticsWrap>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
