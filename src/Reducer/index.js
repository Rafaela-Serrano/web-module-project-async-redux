import {
    GET_JOKE,
    GET_SETUP_SUCCESS,
    GET_PUNCHLINE_SUCCESS,
    GET_JOKE_ERROR,
    FETCHING
} from "../Actions" ; 

const initialState = {
    setUp: '',
    punchLine:'',
    isFetching: false, 
    err:''
}

export const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_JOKE: 
            return state ; 
        case FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case GET_SETUP_SUCCESS:
           return {
             ...state,
            isFetching: false,
            setUp:action.payload, 
        }
        case GET_PUNCHLINE_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                punchLine: action.payload,
            }

        case GET_JOKE_ERROR: 
            return {
                ...state,
                isFetching: false,
                err: action.payload
            }
        
            default: 
            return state; 
    }
}