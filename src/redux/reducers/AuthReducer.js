const initialState = {
    authError:null
}

export const authReducer = (state=initialState,action) =>{

    switch(action.type) {
        case "LOGIN_ERROR":
        console.log("AUTH REDUCER ICINDEN : LOGIN FAILED")
        return {
            ...state,
            authError:"LOGIN failed"
        }
        case "LOGIN_SUCCESS":
        console.log("AUTH REDUCER ICINDEN : LOGIN SUCCESS")
        return {
            ...state,
            authError:null
        }

        case "SIGNOUT_SUCCESS":
        console.log("AUTH REDUCER ICINDEN :Signed out");
        return state;

     case "SIGNUP_SUCCESS":
        console.log("AUTH REDUCER ICINDEN : SIGNUP SUCCESS")
        return {
            ...state,
            authError:null
        }
        case "SIGNUP_ERROR":
        console.log("AUTH REDUCER ICINDEN : SIGNUP FAILED")
        return {
            ...state,
            authError:" :::  " + action.err.message
        }

        default:
        return state
    }
}

export default authReducer;