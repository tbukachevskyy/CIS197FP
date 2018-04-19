
export function getFilteredEvents(filter) {
    url = '/events?'
    url = filter.attendance ? url + 'attendance=true' : url + 'attendance=false';
    url = filter.foodType ? url + ('&type=' + filter.foodType) : url;
    fetch(url, {
        method: 'GET'
    }).then((res) => {
        return dispatch => {
            dispatch({
                type: 'LOAD_EVENTS',
                events: res.data
            });
        }
    });
};

export function changeFilter(filter) {
    return dispatch => dispatch({
        type: 'CHANGE_FILTER',
        data: filter
    });
};