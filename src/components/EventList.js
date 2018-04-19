import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterControl from './FilterControl';

class EventList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({interval: setInterval(this.props.loadEvents, 2500)});
    }

    componenetWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div>
                <FilterControl/>
                <div>
                    {this.props.events.map((event, key) => <Event event={event} key={key}/>)}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loadEvents: () => dispatch(getFilteredEvents(this.props.filter))
});

const mapStateToProps = state => state;


export default connect(
mapStateToProps,
mapDispatchToProps
)(TweetList);