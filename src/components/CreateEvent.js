import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewEvent } from '../actions/eventActions';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
    }

    signUp(e) {
        dispatch(createNewEvent(info))
    }

    render() {
        (
            <form onSubmit={}>

            </form>
        )
    }
}