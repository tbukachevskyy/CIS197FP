import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {events:[],interval:0, filter: {}};
    }

    componentDidMount() {
        this.setState((oldState, props) => {
            newState = Object.assign({}, oldState);
            newState.interval = setInterval(this.getAllTweets, 2500);
            return newState;
        })
    }

    componenetWillUnmount() {
        clearInterval(this.state.interval);
    }

    getFilteredTweets = () => {
        url = '/events?'
        url = this.state.filter.attendance ? url + 'attendance=true' : url + 'attendance=false';
        url = this.state.filter.foodType ? url + ('&type=' + this.state.filter.foodType) : url;
        fetch(url, {
            method: 'GET'
        })
        .then((res) => {
            this.setState((oldState, props) => {
                newState = Object.assign({}, oldState);
                newState.events = res.json().data;
                return newState;
            });
        })
        .catch((err) => {
            console.log('Error occured')
        })
    }

    changeFilter(e) {
        e.preventDefault();
        let attendanceReq = this.refs.attendance.value;
        let food = this.refs.food.value;
        this.setState((oldState, props) => {
            newState = Object.assign({}, oldState);
            newState.filter = {attendance: attendanceReq, foodType: food};
            return newState;
        })
    }
    
    render() {
        return (
            <div>
            <div>
                <form onSubmit={this.changeFilter.bind(this)}>
                <input type="checkbox" id="attendaceFilter" ref="attendance"/>
                <label for="attendanceFilter"> Filter out events which require attendance?</label>
                <input type="text" id="foodFilter" ref="food"/>
                <label for="foodFilter"> Filter for certain food types</label>
                <input type="submit" value="Filter"
                />
                </form>
            </div>
            <div>
                {this.state.events.map((event, key) => <Event event={event} key={key}/>)}
            </div>
            </div>
        )
    }
}