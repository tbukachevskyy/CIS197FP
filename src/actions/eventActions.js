
export function getFilteredEvents(filter) {
    url = '/events'
    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(filter)
    };
    fetch(url, config)
    .then((res) => {
        return res.json();
    })
    .then((resp) => {
        return dispatch => {
            dispatch({
                type: 'LOAD_EVENTS',
                events: resp.data
            });
        }
    })
    .catch((err) => {
        console.log(err.message);
    });
};

export function changeFilter(filter) {
    return dispatch => dispatch({
        type: 'CHANGE_FILTER',
        filter: filter
    });
};
