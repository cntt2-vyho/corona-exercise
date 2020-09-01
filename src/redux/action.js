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
export const getData = () => {
    return dispatch => {
        try {
            dispatch(getDataPendingAction())
            fetch("https://reqres.in/api/users?page=1")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    dispatch(getDataSuccessAction(data.data))
                })
                
        } catch (error) {
            console.log(error);
            dispatch(getDataFailAction(error))
        }

    }
}

