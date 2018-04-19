import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewEvent } from '../actions/eventActions';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
    }

    signUp(e) {
        let title = this.refs.title.value;
        let description = this.refs.description.value;
        let date = this.refs.date.value;
        let time = this.refs.time.value;
        let location = this.refs.location.value;
        let organization = this.refs.organization.value;
        let attendance = (this.refs.attendance.value == 'on') ? true : false;
        dispatch(createNewEvent(info))
    }

    render() {
        (
            <form onSubmit={signUp.bind(this)}>
            <label>Title</label>
            <input type="text" ref="title"/>
            <label>Description</label>
            <input type="text" ref="description"/>
            <label>Date</label>
            <input type="date" ref="date"/>
            <label>Time</label>
            <input type="time" ref="time"/>
            <label>Location</label>
            <input type="text" ref="location"/>
            <label>Organization</label>
            <input type="text" ref="organization"/>
            <label>Attendance for Event Required?></label>
            <input type="checkbox" ref="attendance"/>
            </form>
        )
    }
}