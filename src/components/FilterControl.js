import React, { Component } from 'react'
import { changeFilter } from '../actions/eventActions';
import { connect } from 'react-redux';

class FilterControl extends Component {
    constructor(props) {
        super(props);
    }


    submit(e) {
        e.preventDefault();
        console.log(this.refs.attendance.value);
        let filter = {
            attendanceReq: this.refs.attendance.value === 'on' ? 'true' : 'false'
        };
        this.props.changeFilter(filter);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit.bind(this)}>
                    Filter by attendance requirement? <br/>
                    <input type="checkbox" ref="attendance"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => ({
    changeFilter: (filter) => dispatch(changeFilter(filter))
})

export default connect(null, mapDispatchToProps)(FilterControl);