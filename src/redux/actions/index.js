import { CHANGE_FLAG } from "./../constants/action-types.js";
import { IS_LOGIN } from "./../constants/action-types.js";
import { USER_TOKEN } from "./../constants/action-types.js";


export function changeFlag(flag) {
    
    return {type : CHANGE_FLAG , payload : flag }
}

export function isLogin(flag) {
    
    return {type : IS_LOGIN , payload : flag }
}

export function setUserToken(token) {
    
    return {type : USER_TOKEN , payload : token }
}