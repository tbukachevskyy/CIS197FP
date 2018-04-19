import Component from 'react'
import changeFilter from '../actions/eventActions';

class FilterControl extends Componenet {
    constructor(props) {
        super(props);
    }


    submit(e) {
        e.preventDefault();
        let filter = {
            attendanceReq: this.refs.attendance.value == 'on' ? 'true' : 'false'
        };
        dispatch(changeFilter(filter));
    }

    render() {
        (
            <div>
                <form onSubmit={submit.bind(this)}>
                    Filter by attendance requirement? <br/>
                    <input type="checkbox" ref="attendance"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}