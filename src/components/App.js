import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CreateEvent from './EventList';
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
          <Route path='/new' componenet={CreateEvent}/>
          </Switch>
        </div>
      </div>
    )
  }
}


export default App;
