import React, { useState } from 'react';
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
import Scopa from '../work/scopa';
import Archive from '../work/archive';
import DruidWildShape from '../work/druid-wild-shape';
import QueueTube from '../work/queuetube';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <AnalyticsWrap>
            <Route exact path="/queuetube" component={QueueTube} />
            <Route exact path="/druid-wild-shape" component={DruidWildShape} />
            <Route exact path="/scopa-calculator" component={Scopa} />
            <Route exact path="/gym-todo-project" component={GymTodo} />
            <Route exact path="/lifetales" component={LifeTales} />
            <Route exact path="/rl-inventory" component={RlInventory} />
            <Route exact path="/albumpicker" component={AlbumPicker} />
            <Route exact path="/badlands-brewing" component={BadlandsBrewing} />
            <Route exact path="/learning" component={Learning} />
            <Route exact path="/archived-projects" component={Archive} />
            <Route
              exact
              path="/"
              render={routeProps => (
                <LandingPage
                  scrollPosition={scrollPosition}
                  setScrollPosition={setScrollPosition}
                  {...routeProps}
                />
              )}              
            />
          </AnalyticsWrap>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
