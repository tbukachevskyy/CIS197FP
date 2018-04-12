import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import EventList from './EventList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Switch>
          <Route path='/' component={EventList}/>
          </Switch>
        </div>
      </div>
    )
  }
}


export default App;
