import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
    }

    submit(e) {
        e.preventDefault();
        let info = {
            title: this.refs.title.value,
            description: this.refs.description.value,
            date: this.refs.date.value,
            time: this.refs.time.value,
            location: this.refs.location.value,
            organization: this.refs.organization.value,
            attendance: (this.refs.attendance.value == 'on') ? true : false
        }
        let config = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        };
        fetch('/events/new', config)
        .then(() => {
            console.log('uploaded')
        })
        .catch((err) => {
            console.log(err.message)
        });
    }

    render() {
        return (
            <form onSubmit={this.submit.bind(this)}>
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
            <input type="submit"/>
            </form>
        );
    }
}

export default CreateEvent;