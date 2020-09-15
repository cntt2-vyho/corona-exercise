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
                fetch("http://ec2-54-169-237-154.ap-southeast-1.compute.amazonaws.com/api/v1/posts?limit=10&offset=0")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                     dispatch(getDataSuccessAction( data.results))
                })
                
        } catch (error) {
                
            dispatch(getDataFailAction(error))
        }

    }
}
export const getUserPendingAction = () => ({
    type: "GET_USER"
});

export const getUserSuccessAction = data => ({
    type: "GET_USER_SUCCESS",
    payload: data
});

export const getUserFailAction = error => ({
    type: "GET_USER_FAIL",
    payload: error
});
export const getUser = () => {
    return dispatch => {
        try {
            dispatch(getUserPendingAction())
                fetch("http://ec2-54-169-237-154.ap-southeast-1.compute.amazonaws.com/api/v1/users?limit=10&offset=0")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                     dispatch(getUserSuccessAction( data.results))
                     console.log(data.results);
                })
                
        } catch (error) {
                
            dispatch(getUserFailAction(error))
        }

    }
}

