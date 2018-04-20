
export function getFilteredEvents(filter) {
    return (dispatch) => {
            let url = '/api/events'
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
            dispatch({
                type: 'LOAD_EVENTS',
                events: resp.data
            });
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
};

export function changeFilter(filter) {
    return dispatch => dispatch({
        type: 'CHANGE_FILTER',
        filter: filter
    });
};


