import React, { Component } from 'react'
import { changeFilter } from '../actions/eventActions';
import { connect } from 'react-redux';

class FilterControl extends Component {
    constructor(props) {
        super(props);
    }


    submit(e) {
        e.preventDefault();
        console.log(this.refs.attendance.checked);
        let filter = {
            attendanceReq: !this.refs.attendance.checked,
            vegetarianReq: this.refs.vegetarian.checked,
            veganReq: this.refs.vegan.checked
        };
        console.log(filter);
        this.props.changeFilter(filter);
    }

    render() {
        return (
            <div>
                <h4>Filter Controls</h4>
                <form onSubmit={this.submit.bind(this)}>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="attendance" ref="attendance"/>
                        <label for="attendance">Filter for attendence requirement?</label>
                    </div>
                    <div className="form-check form-group">
                        <input type="checkbox" className="form-check-input" id="vegetarian" ref="vegetarian"/>
                        <label for="vegetarian">Filter for vegetarian requirement?</label>
                    </div>
                    <div className="form-check form-group">
                        <input type="checkbox" className="form-check-input" id="vegan" ref="vegan"/>
                        <label for="vegan">Filter for vegan requirement?</label>
                    </div>
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