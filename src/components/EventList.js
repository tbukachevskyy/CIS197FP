import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterControl from './FilterControl';
import { getFilteredEvents } from '../actions/eventActions'
import Event from './Event';

class EventList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadEvents(this.props.filter);
        this.setState({
            interval: setInterval(() => { 
                this.props.loadEvents(this.props.filter)
            }, 2500)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div>
                <FilterControl />
                <div>
                    {
                        this.props.events.map((event, key) => <Event event={event} key={key} />)
                    }
                </div>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => ({
    loadEvents: (filter) => dispatch(getFilteredEvents(filter))
});

let mapStateToProps = state => state;


export default connect(
mapStateToProps, mapDispatchToProps)(EventList);