

const eventListReducer = (state={events:[], filter: {}}, action) => {
    if (action.type == 'LOAD_EVENTS') {
        newState = Object.assign({}, state);
        newState.events = action.events;
    } else if (action.type == 'CHANGE_FILTER') {
        newState = Object.assign({}, state);
        newState.filter = action.filter;
    }
    return state;
}

module.exports = eventListReducer;