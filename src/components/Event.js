import React, { Component } from 'react';
import { connect } from 'react-redux';

class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h5>
                    { this.props.event.title }
                </h5>
                <p>
                    { this.props.event.date }
                </p>
                <p>
                    { this.props.event.location }
                </p>
                <p>
                    { this.props.event.description }
                </p>
                <p>
                    { this.props.event.organization }
                </p>
                <p>
                    { this.props.event.eventAttendanceRequired }
                </p>
            </div>
        );
    }
}

export default connect()(Event);