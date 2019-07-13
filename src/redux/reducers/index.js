import { CHANGE_FLAG } from "./../constants/action-types.js";
import { IS_LOGIN } from "./../constants/action-types.js";
import { USER_TOKEN } from "./../constants/action-types.js";


const initialState = {

    flag: true,
    // isLogin:,
    // userToken:,

};

function flagReducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE_FLAG:
            return {
                ...state,
                flag: action.payload
            }

        case IS_LOGIN:
            return {
                ...state,
                isLogin: action.payload
            }
        case USER_TOKEN:
            return {
                ...state,
                userToken: action.payload
            }

        default:
            return state;
    }
}

export default flagReducer;