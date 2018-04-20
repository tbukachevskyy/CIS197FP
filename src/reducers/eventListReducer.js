

export var eventListReducer = (state={events:[], filter: {}}, action) => {
    if (action.type == 'LOAD_EVENTS') {
        let newState = Object.assign({}, state);
        newState.events = action.events;
        return newState;
    } else if (action.type == 'CHANGE_FILTER') {
        let newState = Object.assign({}, state);
        newState.filter = action.filter;
        return newState;
    }
    return state;
}

module.exports = eventListReducer;