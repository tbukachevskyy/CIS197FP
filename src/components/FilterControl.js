import Component from 'react'
import changeFilter from '../actions/eventActions';

class FilterControl extends Componenet {
    constructor(props) {
        super(props);
    }


    submit(e) {
        let filter = {};
        dispatch(changeFilter(filter));
    }

    render() {
        (
            <div>
                <form onSubmit={submit.bind(this)}>
                    Food Type <br/>
                    <input type="text" name="foodtype"/>
                    Filter by attendance requirement? <br/>
                    <input type="checkbox" name="attendance"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}