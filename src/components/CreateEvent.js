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
            attendance: (this.refs.attendance.value == 'on') ? 'true' : 'false',
            vegan: (this.refs.vegan.value == 'on') ? 'true' : 'false',
            vegetarian: (this.refs.vegetarian.value == 'on') ? 'true' : 'false'
        }
        let config = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        };
        fetch('/api/new', config)
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
            <div className="form-group">
                <label for="title">Title</label>
                <input className="form-control" type="text" ref="title" id="title"/>
                <label for="description">Description</label>
                <input className="form-control" type="text" ref="description" id="description"/>
                <label for="date">Date</label>
                <input className="form-control" type="date" ref="date" id="date"/>
                <label for="time">Time</label>
                <input  className="form-control"type="time" ref="time" id="time"/>
                <label for="location">Location</label>
                <input className="form-control" type="text" ref="location" id="location"/>
                <label for="organization">Organization</label>
                <input className="form-control" type="text" ref="organization" id="organization"/>
            </div>
            <div className="form-check form-group">
                <input className="form-check-input" type="checkbox" ref="attendance" id="attendance"/>
                <label for="attendance">Attendance for Event Required?</label>
            </div>
            <div className="form-check form-group">
                <input className="form-check-input" type="checkbox" ref="vegetarian" id="vegetarian"/>
                <label for="vegetarian">Vegetarian Options Included?</label>
            </div>
            <div className="form-check form-group">
                <input className="form-check-input" type="checkbox" ref="vegan" id="vegan"/>
                <label for="vegan">Vegan Options Included?</label>
            </div>
            <input type="submit"/>
            </form>
        );
    }
}

export default CreateEvent;