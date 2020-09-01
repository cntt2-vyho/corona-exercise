

const initialState = {
    listData: [],
    loading: false,
    editItem: {},
    updateUser: {},
    editForm: false,
    isAdd: false

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
                listData: action.payload
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
                listData: state.listData.filter(item => item.id !== action.id)
            };
        case "UPDATE_USER":
            var dem=0;
            for(var i = 0; i < state.listData.length; i++){
                // nếu là sinh viên cần edit thì thực hiện edit
                if (state.listData[i].id === action.updateUser.id) { 
                    state.listData[i] = action.updateUser;
                    dem++;
                }
            }
            if(dem===0) {
                state.listData.push(action.updateUser)

            }
            //state.listData[action.updateUser.id] = action.updateUser;
            return {
                ...state
            }
        case "CLOSE":
            return { ...state, editForm: false, editItem: {} , isAdd: false}
        case "OPEN":
            return { ...state, editForm: true }
            case "IS_ADD":
            return { ...state, isAdd: true }
        default:
            return state;

    }
}
export default rootReducer;