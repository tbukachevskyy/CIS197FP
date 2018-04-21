import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CreateEvent from './CreateEvent';
import EventList from './EventList';
import FilterControl from './FilterControl'
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid" >
        <NavBar/>
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
