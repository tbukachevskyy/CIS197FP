import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CreateEvent from './CreateEvent';
import EventList from './EventList';
import FilterControl from './FilterControl'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Switch>
          <Route path='/create' component={CreateEvent}/>
          <Route path='/' component={EventList}/>
          </Switch>
        </div>
      </div>
    )
  }
}


export default App;
