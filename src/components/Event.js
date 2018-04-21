import React, { Component } from 'react';
import { connect } from 'react-redux';

class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        { this.props.event.title }
                    </h5>
                    <p className="card-text text-muted">
                        <small> Presented by { this.props.event.organization } </small>
                    </p>
                    <p className="card-text">
                        <b>When:</b> { this.props.event.date }
                    </p>
                    <p className="card-text">
                        <b>Where:</b> { this.props.event.location }
                    </p>
                    <p className="card-text">
                        { this.props.event.description }
                    </p>
                    <p className="card-text text-muted">
                        <small> { this.props.event.eventAttendanceRequired } </small>
                    </p>
                    <p className="card-text text-muted">
                        <small> {this.props.event.vegetarianOptions}</small>
                    </p>
                    <p className="card-text text-muted">
                        <small>  {this.props.event.veganOptions} </small>
                    </p>
                </div>
            </div>
        );
    }
}

export default connect()(Event);