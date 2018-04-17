import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {events:[],interval:0};
    }

    getAllTweets = () => {
        fetch('/events', {
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
    
    render() {
        return (
            <div>
                {this.state.events.map((event, key) => <Event event={event} key={key}/>)}
            </div>
        )
    }
}