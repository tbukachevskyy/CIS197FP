import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterControl from './FilterControl';

class EventList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componenetWillUnmount() {
    }
    
    render() {
        return (
            <div>
                <FilterControl/>
                <div>
                    {this.state.events.map((event, key) => <Event event={event} key={key}/>)}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loadEvents: (filter) => dispatch(getFilteredEvents(filter))
});

const mapStateToProps = state => state;


export default connect(
mapStateToProps,
mapDispatchToProps
)(TweetList);