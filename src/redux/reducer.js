

const initialState = {
    posts: [],
    loading: false,
    editItem: {},
    editForm: false,
    isAdd: false,

    loadingUser: false,
    users: [],

    userDetail: {},
    editFormUser: false

}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                loading: true
            };
        case "GET_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                posts: action.payload
            };
        case "GET_DATA_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "EDIT_ITEM":
            return {
                ...state, editItem: action.editItem
            }
        case "DELETE_ITEM":
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.id)
            };
        case "UPDATE_USER":
            var dem = 0;
            for (var i = 0; i < state.posts.length; i++) {
                if (state.posts[i].id === action.updateUser.id) {
                    state.posts[i] = action.updateUser;
                    dem++;
                }
            }
            if (dem === 0) {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(action.updateUser)
                };
                fetch('http://ec2-54-169-237-154.ap-southeast-1.compute.amazonaws.com/api/v1/users', requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data));

            }
            //state.listData[action.updateUser.id] = action.updateUser;
            return {
                ...state
            }
        case "CLOSE":
            return { ...state, editForm: false, editItem: {}, isAdd: false }
        case "OPEN":
            return { ...state, editForm: true }
        case "IS_ADD":
            return { ...state, isAdd: true }

        case "LOGIN":

            const requestLogin = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action.payload)
            };
            fetch('http://ec2-54-169-237-154.ap-southeast-1.compute.amazonaws.com/api/v1/auth/login', requestLogin)
                .then(response => response.json())
                .then(data => console.log(data));


            console.log(action.payload);
            return { ...state }

        case "REGISTER":

            const requestRegister = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action.payload)
            };
            fetch('http://ec2-54-169-237-154.ap-southeast-1.compute.amazonaws.com/api/v1/auth/register', requestRegister)
                .then(response => response.json())
                .then(data => console.log(data));
            console.log(action.payload);
            return { ...state };

            case "GET_USER":
            return {
                ...state,
                loadingUser: true
            };
        case "GET_USER_SUCCESS":
            return {
                ...state,
                loadingUser: false,
                users: action.payload
            };
        case "GET_USER_FAIL":
            return {
                ...state,
                loadingUser: false,
                error: action.payload
            };


case "GET_USER_DETAILS":
    return {
        ...state, userDetail: action.payload
    }

    case "CLOSE_USER":
        return { ...state, editFormUser: false, userDetail: {} }
    case "OPEN_USER":
        return { ...state, editFormUser: true }












        default:
            return state;

    }
}
export default rootReducer;