export const getDataPendingAction = () => ({
    type: "GET_DATA"
});

export const getDataSuccessAction = data => ({
    type: "GET_DATA_SUCCESS",
    payload: data
});

export const getDataFailAction = error => ({
    type: "GET_DATA_FAIL",
    payload: error
});
var list = [];
export const getData = () => {
    return dispatch => {
        try {
            dispatch(getDataPendingAction())
            fetch("https://reqres.in/api/users?page=1")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                   data.data.map(value => list.push(value));
                })

                fetch("https://reqres.in/api/users?page=2")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    data.data.map(value => list.push(value));
                    dispatch(getDataSuccessAction(list))
                })
                
        } catch (error) {
            console.log(error);
            dispatch(getDataFailAction(error))
        }

    }
}

